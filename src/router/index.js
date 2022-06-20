import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/',
                component: () => import('../views/Base64/index.vue'),
                name: 'Base64'
            }
        ]
    },
    {
        path: '/json',
        component: Layout,
        children: [
            {
                path: '/json',
                component: () => import('../views/Json/index.vue'),
                name: 'Json'
            }
        ]
    },
    {
        path: '/timestamp',
        component: Layout,
        children: [
            {
                path: '/timestamp',
                component: () => import('../views/timestamp/index.vue'),
                name: '时间戳'
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
