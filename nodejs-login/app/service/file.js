'use strict';

const Service = require('egg').Service;
const fs = require('fs');

class fileService extends Service {
    async upload(fileName, description, file) {
        const { size: fileSize, birthtime: uploadTime } = await fs.statSync(file.filepath);
        const mysql = this.app.mysql;
        const transaction = await mysql.beginTransaction();
        try {
            const insert_file = await transaction.insert('file', { file_name: fileName, description, file_size: fileSize, upload_time: uploadTime });
            const loginUsername = await this.ctx.session.loginUsername;
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
        return { status: 200, message: 'success' };
    }

    async query(query, page = 1, size = 10) {
        const { ctx } = this;
        const mysql = this.app.mysql;
        const loginUsername = ctx.session.loginUsername;
        let sql = 'select count(*) from `user_file` uf,`file` f where uf.file_id = f.id and uf.username = ? and f.file_name like ?';
        // 总数量
        query = query === undefined ? '%%' : `%${query}%`;
        let total = await mysql.query(sql, [ loginUsername, query ]);
        total = total[0]['count(*)'];
        sql = `select f.id,f.file_name fileName,f.file_size fileSize,f.upload_time uploadTime, f.description 
            from \`user_file\` uf,\`file\` f
            where uf.file_id = f.id and uf.username = ? and f.file_name like ? limit ?,?`;
        const fileList = await mysql.query(sql, [ loginUsername, query, (page - 1) * size, (page - 1) * size + size ]);
        return { status: 200, message: 'success', data: { totalPage: Math.trunc(((total + size - 1) / size)), fileList, currentPage: page, size } };
    }
}

module.exports = fileService;
