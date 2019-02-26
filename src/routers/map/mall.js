import Main from 'views/main/index.vue'// 主页框架
import Home from 'views/home/index.vue'
import List from 'views/list/index.vue'
import Shop from 'views/shop/index.vue'
import ShopVuex from 'views/shopVuex/index.vue'
import Detail from 'views/detail/index.vue'
import Echarts from 'views/echarts/index.vue'
import Swiper from 'views/swiper/index.vue'
export default [
    {
        path: '/',
        name: '商城',
        component: Main,
        children: [
            {
                path: '/home',
                name: '首页',
                component: Home
            },
            {
                path: '/list',
                name: '首页',
                component: List
            },
            {
                path: '/shop',
                name: '首页',
                component: Shop
            },
            {
                path: '/shopVuex',
                name: '首页',
                component: ShopVuex
            },
            {
                path: '/detail',
                name: 'Detail',
                component: Detail
            },
            {
                path: '/echarts',
                name: '首页',
                component: Echarts
            },
            {
                path: '/swiper',
                name: '首页',
                component: Swiper
            },
        ]
    }
]