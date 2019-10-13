/* eslint valid-jsdoc: "off" */

'use strict';

const mysqlConfig = require('./mysql-config');
const securityConfig = require('./security-config');

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
    config.security = securityConfig.security;
    config.cors = securityConfig.cors;
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
