'use strict';

exports.security = {
    csrf: {
        queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
    // csrf: {
    //     enable: false,
    // },
    // domainWhiteList: [ 'http://localhost:8080' ],
};
// exports.cors = {
//     credentials: true,
//     allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
// };
