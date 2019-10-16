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
    router.get('/file', controller.file.file.query);
    router.put('/file/:id', controller.file.file.update);
    router.delete('/file/:list', controller.file.file.delete);
    router.get('/file/download/:id', controller.file.file.download);
};
