import WangEditor from 'wangeditor'

export default {
    name: 'WangEditor',
    props: {
        content: String,
    },
    data() {
        return {
            initContent: '',
            editor: null
        }
    },
    watch: {
        content() {
            this.updateEditor()
        },
        initContent() {
            this.$emit('update:content', this.initContent)
        },
    },
    mounted() {
        this.createEditor()
        this.updateEditor()
    },
    methods: {
        //初始化编辑器
        createEditor() {
            const editor = new WangEditor('#editor')
            /*const editor = new WangEditor(this.$el)*/
            // 自定义菜单配置
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'emoticon',  // 表情
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
            // 自定义字体
            editor.customConfig.fontNames = [
                '宋体',
                '微软雅黑',
                'Arial',
                'Tahoma',
                'Verdana'
            ]
            editor.customConfig.colors = [
                '#000000',
                '#eeece0',
                '#1c487f',
                '#4d80bf',
                '#c24f4a',
                '#8baa4a',
                '#7b5ba1',
                '#46acc8',
                '#f9963b',
                '#ffffff'
            ]
            editor.customConfig.onchangeTimeout = 2000
            // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
            editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
            //editor.customConfig.uploadImgServer = 'https://jsonplaceholder.typicode.com/posts/'  // 上传图片到服务器
             // 隐藏“网络图片”tab
            editor.customConfig.showLinkImg = false
            // 将图片大小限制为 3M
            editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
            // 限制一次最多上传 5 张图片
            editor.customConfig.uploadImgMaxLength = 5
            //跨域上传中如果需要传递 cookie 需设置 withCredentials
            editor.customConfig.withCredentials = true
            // 将 timeout 时间改为 3s
            editor.customConfig.uploadImgTimeout = 3000
            editor.customConfig.onchange = (html) => {
                // html 即变化之后的内容
                this.initContent = html
                console.log(html)
            }
            editor.create()
            this.editor = editor
        },
        updateEditor() {
            this.initContent = this.content
            this.editor.txt.html(this.initContent)
        },
        //插入新元素
        insertHtml() {
            this.editor.cmd.do('insertHtml', '<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183577209,755654393&fm=26&gp=0.jpg" style="max-width:100%;" />')
        },
    }
}
