'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const responseCode = require('../config/responseCode');
const fastDFSClinet = require('../config/fastDFS-config');
const path = require('path');

class fileService extends Service {
    /*
     * 上传文件
     * @param fileName 文件名
     * @param description 文件描述
     * @param file 上传的文件
     * @returns {Promise<{message: string, status: number}>}
     */
    async upload(fileName, description, file) {
        const { size: fileSize, birthtime: uploadTime } = await fs.statSync(file.filepath);
        const mysql = this.app.mysql;
        const extname = path.extname(file.filepath);
        // 上传文件到 FastDFS 文件系统上
        const fileId = await fastDFSClinet.upload(file.filepath, {
            ext: extname,
        }).then(fileId => {
            return fileId;
        }).catch(error => { throw error; });
        const transaction = await mysql.beginTransaction();
        try {
            const insert_file = await transaction.insert('file', {
                file_name: fileName,
                description,
                fast_id: fileId,
                file_size: fileSize,
                upload_time: uploadTime,
            });
            const loginUsername = await this.ctx.session.loginUsername;
            if (loginUsername === undefined || loginUsername === null) {
                return responseCode.notLogin;
            }
            await transaction.insert('user_file', { username: loginUsername, file_id: insert_file.insertId });
            await transaction.commit();
        } catch (error) {
            console.log(error);
            // eslint-disable-next-line no-empty
            if (error.sqlMessage === 'Column \'username\' cannot be null') {

            }
            await transaction.rollback(); // 一定记得捕获异常后回滚事务！！
            throw error;
        } finally {
            // 删除临时文件
            await fs.unlink(file.filepath, err => {
                if (err) {
                    console.log(err);
                }
            });
        }
        return responseCode.success;
    }

    /*
     * 查询文件
     * @param query 查询关键字
     * @param page 查询页面
     * @param size 页面大小
     * @returns {Promise<{data: {size: *, totalPage: *, currentPage: *, fileList: *}, message: string, status: number}|module.exports.notLogin|{message, status}>}
     */
    async query(query, page = 1, size = 10) {
        const { ctx } = this;
        const mysql = this.app.mysql;
        const loginUsername = ctx.session.loginUsername;
        if (loginUsername === undefined || loginUsername === null) {
            return responseCode.notLogin;
        }
        let sql = 'select count(*) from `user_file` uf,`file` f where uf.file_id = f.id and uf.username = ? and f.file_name like ?';
        // 总数量
        query = query === undefined || query === '' ? '%%' : `%${query}%`;
        try {
            page = Number.parseInt(page);
            size = Number.parseInt(size);
        } catch (e) {
            throw e;
        }
        let total = await mysql.query(sql, [ loginUsername, query ]);
        total = total[0]['count(*)'];
        sql = `select f.id,f.file_name fileName,f.file_size fileSize,f.upload_time uploadTime, f.description ,f.fast_id fastID
            from \`user_file\` uf,\`file\` f
            where uf.file_id = f.id and uf.username = ? and f.file_name like ? limit ?,?`;
        const fileList = await mysql.query(sql, [ loginUsername, query, (page - 1) * size, (page - 1) * size + size ]);
        return {
            status: 200,
            message: 'success',
            data: { totalPage: Math.trunc(((total + size - 1) / size)), fileList, currentPage: page, size },
        };
    }

    /*
     * 删除文件
     * @param list 文件id list [1,2,3,....]
     * @returns {Promise<module.exports.success|{message, status}|module.exports.notLogin|{message, status}>}
     */
    async delete(list) {
        list = list.split(',');
        const transaction = await this.app.mysql.beginTransaction();
        try {
            const loginUsername = this.ctx.session.loginUsername;
            if (loginUsername === undefined || loginUsername === null) {
                return responseCode.notLogin;
            }
            let sql = 'delete from `file` f where f.id in (?)';
            await transaction.query(sql, [ list ]);
            sql = 'delete from `user_file` where username=? and file_id in (?)';
            await transaction.query(sql, [ loginUsername, list ]);
            await transaction.commit();
        } catch (e) {
            await transaction.rollback();
            throw e;
        }
        return responseCode.success;
    }

    /*
     * 更新文件
     * @param id 文件id
     * @param fileName 更新后的文件名
     * @param description 更新后的文件描述
     * @returns {Promise<module.exports.success|{message, status}>}
     */
    async update(id, fileName, description) {
        try {
            await this.app.mysql.update('file', { id, file_name: fileName, description });
            return responseCode.success;
        } catch (e) {
            throw e;
        }
    }

    /*
     * 下载文件
     * @param id 要下载的文件id
     */
    async download(id) {
        const file = await this.app.mysql.get('file', { id });
        const { fast_id: fastId, file_name: fileName } = file;
        const writer = fs.createWriteStream(fileName);
        await fastDFSClinet.download(fastId, writer);
        this.ctx.set('file-name', `${fileName}`);
        this.ctx.body = fs.createReadStream(fileName);
    }
}

module.exports = fileService;
