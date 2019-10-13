'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        const { ctx } = this;
        const query = ctx.request.body;
        const { username, password, code } = query;
        ctx.body = await ctx.service.login.verify(username, password, code);
    }
    async loginPage() {
        const { ctx } = this;
        // ctx.response.contentType('text/html');
        await ctx.render('index.html', { code: 111 });
    }
}

module.exports = LoginController;
