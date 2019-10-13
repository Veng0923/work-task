export const hostConfig = {
    host: '127.0.0.1',
    port: 7001,
};

const origin = `http://${hostConfig.host}:${hostConfig.port}`;

const routerConfig = {

    // 登录post url
    login: `${origin}/login`,
    // 获取验证码 url
    code: `${origin}/code`,
    // 上传文件url
    upload: `${origin}/upload`,
};
export default routerConfig;