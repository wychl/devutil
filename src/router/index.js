import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '',
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
    {
        path: '/random',
        component: Layout,
        children: [
            {
                path: '/random',
                component: () => import('../views/Random/index.vue'),
                name: '随机字符串',
            }]
    },
    {
        component: Layout,
        children: [
            {
                path: '/imagebase64',
                component: () => import('../views/ImageBase64/index.vue'),
                name: '图片Base64'
            }
        ]
    },
    {
        path: '/qrcode',
        component: Layout,
        children: [
            {
                path: '/qrcode',
                component: () => import('../views/QRCode/index.vue'),
                name: '二维码'
            }
        ]
    },
    {
        path: '/imageprocess',
        component: Layout,
        children: [
            {
                path: '/imageprocess',
                component: () => import('../views/ImageProcess/index.vue'),
                name: '图片处理'
            }
        ]
    },
    {
        path: '/jwt',
        component: Layout,
        children: [
            {
                path: '/jwt',
                component: () => import('../views/JWTDecode/index.vue'),
                name: 'JWT'
            }
        ]
    },
    {
        path: '/jwtencode',
        component: Layout,
        children: [
            {
                path: '/jwtencode',
                component: () => import('../views/JWTEncode/index.vue'),
                name: 'JWTEncode'
            }
        ]
    },
    {
        path: '/markdown',
        component: Layout,
        children: [
            {
                path: '/markdown',
                component: () => import('../views/Markdown/index.vue'),
                name: 'markdown'
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
