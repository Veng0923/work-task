'use strict';

const Service = require('egg').Service;
const fs = require('fs');

class fileService extends Service {
    async upload(fileName, description, file) {
        const { size: fileSize, birthtime: uploadTime } = await fs.statSync(file.filepath);
        await this.app.mysql.insert('file', { file_name: fileName, description, file_size: fileSize, upload_time: uploadTime });
        await fs.unlink(file.filepath, err => {
            if (err) {
                console.log(err);
            }
        });
        return { status: 200, message: 'success' };
    }
}

module.exports = fileService;
