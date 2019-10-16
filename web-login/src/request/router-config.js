export const hostConfig = {
    host: '127.0.0.1',
    port: 7001,
};

let origin = `http://${hostConfig.host}:${hostConfig.port}`;
// origin = '';
import {Cookies} from "../utils/Cookies";
export const csrfToken = Cookies.getCookies('csrfToken');
const routerConfig = {

    // 登录post url
    login: `${origin}/login`,
    // 获取验证码 url
    code: `${origin}/code`,
    // 上传文件url
    upload: `${origin}/upload`,
    // 获取文件
    file: `${origin}/file`,
    downloadFile: `${origin}/file/download`,
};
export default routerConfig;