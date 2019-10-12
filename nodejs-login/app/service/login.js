// eslint-disable-next-line strict
const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class LoginService extends Service {
    async verify(username, password, code) {
        const isLogin = username === 'veng' && password === '123456';
        if (!isLogin) {
            return {status: 0, message: '账号或密码错误!'};
        }
        return this.ctx.service.verify.verify(code).then(isCode => {
            if (!isCode) {
                return {status: 1, message: "验证码错误!"}
            } else {
                const token = jwt.sign({
                    username: username,
                    password: password,
                }, "veng", {expiresIn: "1h"});
                return {status: 200, token};
            }
        });
    }
}

module.exports = LoginService;
