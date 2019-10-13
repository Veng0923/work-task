/* eslint valid-jsdoc: "off" */

'use strict';

const mysqlConfig = require('./mysql-config');

module.exports = appInfo => {
    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1570585814257_5919';

    // add your middleware config here
    config.middleware = [];
    config.view = {
        defaultViewEngine: 'nunjucks',
    };
    config.static = {
        prefix: '/',
    };
    config.security = {
    // csrf: {
    //   queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    //   bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    // },
        csrf: {
            enable: false,
        },
        domainWhiteList: [ 'http://localhost:8080' ],
    };
    config.cors = {
    // origin:'http://locahost:8080',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    config.mysql = mysqlConfig;
    // add your user config here
    const userConfig = {
    // myAppName: 'egg',
    };
    return {
        ...config,
        ...userConfig,
    };
};
