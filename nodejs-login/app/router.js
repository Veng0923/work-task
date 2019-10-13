'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.login.login.loginPage);
    router.post('/login', controller.login.login.login);
    router.get('/login', controller.login.login.loginPage);
    router.get('/code', controller.login.verify.produce);
    router.post('/upload', controller.file.file.upload);
};
