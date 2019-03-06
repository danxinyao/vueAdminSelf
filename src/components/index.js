import box from './box/index.vue'//公共弹出框 
import header from './header/index.vue'//公共头部
import content from './content/index.vue'//公共主页面
import icon from './icon/index.vue'//字体图标
import img from './img/index.vue'//图片
import pagination from './pagination/index.vue'//分页
import editor from './editor/index.vue'//富文本编辑器
import wangEditor from './wangEditor/index.vue'//wangEditor富文本编辑器


const install = function (Vue) {
    Vue.component(box.name, box)
    Vue.component(content.name, content)
    Vue.component(header.name, header)
    Vue.component(icon.name, icon)
    Vue.component(img.name, img)
    Vue.component(pagination.name, pagination)
    Vue.component(editor.name, editor)
    Vue.component(wangEditor.name, wangEditor)
}

export default install