'use strict';

const Controller = require('egg').Controller;
const responseCode = require('../../config/responseCode');
// const fs = require('mz/fs');

class FileController extends Controller {
    /*
     * 上传文件接口 该接口只支持上传单个文件
     * @return {Promise<void>}
     */
    async upload() {
        const { ctx } = this;
        const { fileName, description } = ctx.request.body;
        // 获取上传的文件列表中的第一个文件 这也是支持单个文件原因
        const file = ctx.request.files[0];
        ctx.body = await ctx.service.file.upload(fileName, description, file);
    }

    /*
     * 查询文件接口
     * @returns {Promise<void>}
     */
    async query() {
        const { ctx } = this;
        const { query, page, size } = ctx.query;
        ctx.response.body = await ctx.service.file.query(query, page, size);
    }

    /*
     * 删除文件接口
     * @returns {Promise<void>}
     */
    async delete() {
        const { ctx } = this;
        // const { list } = ctx.request.body;
        const { list } = ctx.params;
        ctx.body = await ctx.service.file.delete(list);
    }

    /*
     * 修改文件接口
     * @returns {Promise<void>}
     */
    async update() {
        const { ctx } = this;
        const { id } = ctx.params;
        const { fileName, description } = ctx.request.body;
        ctx.body = await ctx.service.file.update(id, fileName, description);
    }

    async download() {
        const { ctx } = this;
        const { id } = ctx.params;
        await ctx.service.file.download(id);
    }
}

module.exports = FileController;
