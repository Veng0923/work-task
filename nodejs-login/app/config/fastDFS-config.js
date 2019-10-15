'use strict';
const FastDFSClient = require('fastdfs-client');
module.exports = new FastDFSClient({
    // tracker servers
    trackers: [
        {
            host: '10.18.139.173',
            port: 22122,
        },
    ],
    // 默认超时时间10s
    timeout: 10000,
    // 默认后缀
    // 当获取不到文件后缀时使用
    defaultExt: 'txt',
    // charset默认utf8
    charset: 'utf8',
});
