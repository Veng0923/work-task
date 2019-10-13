'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class LoginService extends Service {
    async verify(username, password, code) {
        const user = await this.app.mysql.get('user', { username });
        const isLogin = user && user.password === password;
        if (!isLogin) {
            return { status: 0, message: '账号或密码错误!' };
        }
        return this.ctx.service.verify.verify(code).then(isCode => {
            if (!isCode) {
                return { status: 1, message: '验证码错误!' };
            }
            const token = jwt.sign({
                username,
                password,
            }, 'veng', { expiresIn: '1h' });
            this.ctx.session.token = token;
            return { status: 200, token };

        });
    }
}

module.exports = LoginService;
