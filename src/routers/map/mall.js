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
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/list',
                name: 'List',
                component: List
            },
            {
                path: '/shop',
                name: 'Shop',
                component: Shop
            },
            {
                path: '/shopVuex',
                name: 'ShopVuex',
                component: ShopVuex
            },
            {
                path: '/detail',
                name: 'Detail',
                component: Detail
            },
            {
                path: '/echarts',
                name: 'Echarts',
                component: Echarts
            },
            {
                path: '/swiper',
                name: 'Swiper',
                component: Swiper
            },
        ]
    }
]