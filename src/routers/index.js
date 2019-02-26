const Main = () => import('views/main/index.vue') // 主页框架
import Mall from './map/mall'
import Login from './map/login'


export default [
    ...Mall,
    ...Login,
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统',
            auth: true
        }
    }
]
