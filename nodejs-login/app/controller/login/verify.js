'use strict';

const Controller = require('egg').Controller;

class VerifyController extends Controller {
    async produce() {
        const { ctx } = this;
        ctx.response.body = await ctx.service.verify.produce();
    }
}

module.exports = VerifyController;
