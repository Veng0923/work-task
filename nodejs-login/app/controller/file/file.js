'use strict';

const Controller = require('egg').Controller;
// const fs = require('mz/fs');

class FileController extends Controller {
    async upload() {
        const { ctx } = this;
        const { fileName, description } = ctx.request.body;
        const file = ctx.request.files[0];
        ctx.body = await ctx.service.file.upload(fileName, description, file);
    }

    async query() {
        const { ctx } = this;
        const { query, page, size } = ctx.request.body;
        ctx.response.body = await ctx.service.file.query(query, page, size);
    }
}

module.exports = FileController;
