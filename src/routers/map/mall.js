import Main from 'views/main/index.vue'// 主页框架
import Home from 'views/home/index.vue'
import List from 'views/list/index.vue'
import Shop from 'views/shop/index.vue'
import ShopVuex from 'views/shopVuex/index.vue'
import Detail from 'views/detail/index.vue'
import Echarts from 'views/echarts/index.vue'
import Swiper from 'views/swiper/index.vue'
import Color from 'views/color/index.vue' //颜色选择器
import Editor from 'views/editor/index.vue' //富文本编辑器
import WangEditor from 'views/wangEditor/index.vue' //富文本编辑器WangEditor
import GdMap from 'views/gdMap/index.vue' //高德地图
import BdMap from 'views/bdMap/index.vue' //百度地图
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
            {
                path: '/color',
                name: '颜色选择器',
                component: Color
            },
            {
                path: '/editor',
                name: '富文本编辑器',
                component: Editor
            },
            {
                path: '/wangEditor',
                name: '富文本编辑器-wangEditor',
                component: WangEditor
            },
            {
                path: '/gdMap',
                name: '高德地图',
                component: GdMap
            },
            {
                path: '/bdMap',
                name: '百度地图',
                component: BdMap
            },            
            
        ]
    }
]