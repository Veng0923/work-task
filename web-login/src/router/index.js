import Vue from 'vue';
import VueRouter from 'vue-router';

import index from "@/components/index";
import login from "@/components/login/login";
import file from "../components/file/file";
Vue.use(VueRouter);

export const routes = [
    {
        path: `/index`,
        component: index,
        meta:{requiresAuth: true},
        redirect: '/',
    },
    {
        path: `/`,component: index,meta:{requiresAuth: true},
        redirect: 'file',
        children:[
            {
                path: `file`,
                component: file,
                meta:{
                    icon: 'el-icon-folder-opened',
                    title: `文件管理`,
                    requiresAuth: true,
                }
            },
        ],
    },
    {path: `/login`,component: login,meta:{requiresAuth: false}},
];
const router = new VueRouter({
    // mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!sessionStorage.getItem("token") || sessionStorage.token === '') {
            next({
                path:'/login',
            });
        }
    }
    next();
});
export default router;