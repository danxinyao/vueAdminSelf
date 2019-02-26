import { menuList } from '../../data/menu.js'

export default {
    data() {
        return {
            sysName: '现联瑜伽管理后台系统',
            menuList: [],
            userName: 'admin'
        }
    },
    mounted() {
        // 获取菜单
        this.menuList = menuList
    },
    methods: {
        // 退出登录
        exit() {
            this.$confirm('确定退出吗？', '提示', { type: 'warning' }).then(() => {
                this.$message({
                    message: '退出登录成功',
                    type: 'success'
                })
                this.$router.push('/login')
            }).catch(() => {

            })
        },
    }
}