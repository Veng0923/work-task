import fly from 'flyio';
import routerConfig from "./router-config";
// import {Cookies} from "../utils/Cookies";

// const csrf_token = Cookies.getCookies('csrfToken');
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    // request.headers["x-csrf-token"]= csrf_token;
    request.withCredentials = true;
    // request.body.credentials = true;
    return request;
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
    console.log(list);
    // let formData = new FormData();
    // formData.append("list",list);
    return fly.request(routerConfig.file,null,{headers:{
            "content-type":"application/x-www-form-urlencoded"
        },method: 'delete',body:{list}}).then(response=>{
        return response.data;
    });
}
