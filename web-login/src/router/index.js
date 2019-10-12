import Vue from 'vue';
import VueRouter from 'vue-router';

import index from "@/components/index";
import login from "@/components/login/login";

Vue.use(VueRouter);

const routes = [
    {path: `/index`,component: index,meta:{requiresAuth: true}},
    {path: `/`,component: index,meta:{requiresAuth: true}},
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