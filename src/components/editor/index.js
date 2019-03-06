import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'whatwg-fetch'
export default {
    components: {
        quillEditor
    },
    name: 'PgEditor',
    props: {
        content: String
    },
    data() {
        return {
            initContent: '',
            editorOption: {
                placeholder: '请输入内容',
                modules: {
                    toolbar: [
                        [{ 'size': ['small', false, 'large'] }],
                        ['bold', 'italic'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link', 'image']
                    ],
                    history: {
                        delay: 1000,
                        maxStack: 50,
                        userOnly: false
                    },
                    imageDrop: true,
                    imageResize: {
                        displayStyles: {
                            backgroundColor: 'black',
                            border: 'none',
                            color: 'white'
                        },
                        modules: ['Resize', 'DisplaySize', 'Toolbar']
                    }
                }
            }
        }
    },
    watch: {
        content() {
            this.initContent = this.content
        },
        initContent() {
            this.$emit('update:content', this.initContent)
        },
    },
    computed: {
        editor() {
            return this.$refs.myTextEditor.quillEditor
        }
    },
    mounted() {
/*        if (this.$refs.myTextEditor) {
            //myQuillEditor改成自己的
            this.$refs.myTextEditor.quill.getModule("toolbar").addHandler("image", this.imgHandler);
            //这里初始化，劫持toolbar的image的handler方法，在mounted中处理
        }*/
    },
    methods: {
        imgHandler(state) {
             if (state) {
                console.log('dan')
            //触发input的单击 ，fileBtn换成自己的
                this.$refs.fileBtn.click()
            }
        },
        handleChange(e) {
            console.log(e)
            const files = Array.prototype.slice.call(e.target.files);
            console.log(files)
            if (!files) {
                return;
            }
            let form = new FormData();
            form.append("file", files[0]);
            console.log(form)
            //使用了axios请求
/*            fetch({
                url: 'https://jsonplaceholder.typicode.com/posts/',
                method: 'post',
                data: form,
                headers: {'Content-Type': undefined},
                withCredentials: true
            }).then(({data: {responseData}}) => {
            //这里设置为空是为了联系上传同张图可以触发change事件
                this.$refs.fileBtn.value = "";
                if (responseData.uploadSuccess) {
                    let selection = this.$refs.myQuillEditor.quill.getSelection();
                    //这里就是返回的图片地址，如果接口返回的不是可以访问的地址，要自己拼接
                    let imgUrl = responseData.imageUrl;                    
                    //获取quill的光标，插入图片 
                    this.$refs.myQuillEditor.quill.insertEmbed(selection != null ? selection.index : 0, 'image', imgUrl)                 
                    //插入完成后，光标往后移动一位 
                   this.$refs.myQuillEditor.quill.setSelection(selection.index + 1);

                } 
            })*/
        },
        onEditorBlur(editor) {
            //this.$emit('update:content', this.initContent)
            //console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            //console.log('editor focus!', editor)
        },
        onEditorChange({ editor, html, text }) {
            console.log('html', html)
            //this.initContent = html
        }
    }
}
