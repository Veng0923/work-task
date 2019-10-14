'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class VerifyService extends Service {
    async produce() {
        const svg = svgCaptcha.create({
            size: 4,
            noise: 2,
            color: true,
            width: 100,
            height: 40,
            fontSize: 38,
        });
        this.ctx.session.logincode = svg.text;
        return svg.data;
    }
    async verify(code) {
        const logincode = this.ctx.session.logincode;
        return logincode.toLowerCase() === code.toLowerCase();
    }
}

module.exports = VerifyService;
