import fly from 'flyio';
// import {Cookies} from "../utils/Cookies";

// const csrf_token = Cookies.getCookies('csrfToken');
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    // request.headers["x-csrf-token"]= csrf_token;
    request.withCredentials = true;
    // request.body.credentials = true;
    return request;
});

const host = "http://localhost:7001";
// const host = "";
export async function login(username,password,code) {
    const url = `${host}/login`;
    return fly.post(url,{
        username,
        password,
        code,
    }).then(response=>{
        return response.data;
    });
}
export async function getCode() {
    const url = `${host}/code`;
    return fly.get(url,{}).then(response=>{
        return response.data;
    });
}