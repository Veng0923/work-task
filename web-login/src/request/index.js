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

export async function login(username,password,code) {
    return fly.post(routerConfig.login,{
        username,
        password,
        code,
    }).then(response=>{
        return response.data;
    });
}
export async function getCode() {
    return fly.get(routerConfig.code,{}).then(response=>{
        return response.data;
    });
}
