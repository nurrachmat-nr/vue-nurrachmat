import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/HelloWorld')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Main')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/Main')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;