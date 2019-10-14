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
}

module.exports = fileService;
