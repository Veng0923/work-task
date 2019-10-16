'use strict';
const responseCode = require('../config/responseCode');
module.exports = options => {
    return async function certificate(ctx, next) {
        await next();
        const token = ctx.get('token');
        if (ctx.session.token !== token) {
            ctx.body = responseCode.notLogin;
        }
    };
};
