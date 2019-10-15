import fly from 'flyio';
import routerConfig from "./router-config";
import router from "../router";
import Axios from "axios";

// import {Cookies} from "../utils/Cookies";
Axios.interceptors.request.use(config=>{
    config.withCredentials = true;
    return config;
});
// const csrf_token = Cookies.getCookies('csrfToken');
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    // request.headers["x-csrf-token"]= csrf_token;
    request.withCredentials = true;
    // request.body.credentials = true;
    return request;
});
fly.interceptors.response.use(response=>{
    const status = response.data.status;
    if (status === 410){
        router.push('/login');
    }
});
/**
 * 登陆验证
 * @param username 用户账号
 * @param password 用户密码
 * @param code 验证码
 * @returns {Promise<*>}
 */
export async function login(username,password,code) {
    return fly.post(routerConfig.login,{
        username,
        password,
        code,
    }).then(response=>{
        return response.data;
    });
}

/**
 * 获取验证码 从服务器加载验证码
 * @returns {Promise<*>}
 */
export async function getCode() {
    return fly.get(routerConfig.code,{}).then(response=>{
        return response.data;
    });
}

/**
 * 分页查询文件
 * @param query 查询关键字
 * @param page 页数
 * @param size 每页大小
 * @returns {Promise<*>}
 */
export async function getFileList( query, page, size ) {
    return fly.get(routerConfig.file,{query,page,size}).then(response=>{
        return response.data.data;
    });
}

/**
 * 删除文件
 * @param list 文件id列表 [1,2,3,...]
 * @returns {Promise<*>}
 */
export async function deleteFiles(list){
    // return fly.delete(routerConfig.file+`/${list}`).then(response=>{
    //     return response.data;
    // });
    return Axios.delete(routerConfig.file,{
        data:{list},
    }).then(response=>{
        return response.data;
    });
}

/**
 * 修改文件信息
 * @param id 文件id
 * @param fileName 文件名
 * @param description 文件描述
 * @returns {Promise<*>}
 */
export async function updateFile(id,fileName, description) {
    return fly.put(`${routerConfig.file}/${id}`,{fileName,description}).then(response=>{
        return response.data;
    });
}

