import fly from 'flyio';
import routerConfig from "./router-config";
import router from "../router";
import Axios from "axios";
import store from "../store";
import {csrfToken} from "./router-config";

Axios.interceptors.request.use(config => {
    config.withCredentials = true;
    return config;
});


fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    request.headers["x-csrf-token"]= csrfToken;
    // request.withCredentials = true;
    request.headers["token"] = store.getters.getToken;
    return request;
});
fly.interceptors.response.use(response => {
    const status = response.data.status;
    if (status === 410) {
        router.push('/login').catch(e=>{
            console.log(e);});
    }
});
Axios.interceptors.response.use(response => {
    const status = response.data.status;
    if (status === 410) {
        router.push('/login').catch(e=>{
            console.log(e);});
    }
});

/**
 * 登陆验证
 * @param username 用户账号
 * @param password 用户密码
 * @param code 验证码
 * @returns {Promise<*>}
 */
export async function login(username, password, code) {
    return fly.post(routerConfig.login, {
        username,
        password,
        code,
    }).then(response => {
        return response.data;
    });
}

/**
 * 获取验证码 从服务器加载验证码
 * @returns {Promise<*>}
 */
export async function getCode() {
    return fly.get(routerConfig.code, {}).then(response => {
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
export async function getFileList(query, page, size) {
    return fly.get(routerConfig.file, {query, page, size}).then(response => {
        return response.data.data;
    });
}

/**
 * 删除文件
 * @param list 文件id列表 [1,2,3,...]
 * @returns {Promise<*>}
 */
export async function deleteFiles(list) {
    return fly.delete(routerConfig.file+`/${list}`).then(response=>{
        return response.data;
    });
    // return Axios.delete(routerConfig.file, {
    //     data: {list},
    // }).then(function(response){
    //     debugger;
    //     return response;
    // }).catch(e=>{
    //     return e;
    // });
}

/**
 * 修改文件信息
 * @param id 文件id
 * @param fileName 文件名
 * @param description 文件描述
 * @returns {Promise<*>}
 */
export async function updateFile(id, fileName, description) {
    return fly.put(`${routerConfig.file}/${id}`, {fileName, description}).then(response => {
        return response.data;
    });
}

export async function downloadFile(id,filename) {
    // window.open(`${routerConfig.downloadFile}/${id}`, '_blank');
    return fly.get(`${routerConfig.downloadFile}/${id}`,null,{
        gzip:true,
        headers:{
            'Content-Type': 'application/octet-stream',
        },
        responseType: 'blob',
    }).then(response=>{
        const blob = response.data;
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            const a = document.createElement('a');
            a.download = filename;
            // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
            a.href = window.URL.createObjectURL(blob);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };
    });
}
