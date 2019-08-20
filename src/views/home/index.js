import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
/*import { account as ajax } from 'services'*/
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        videoPlayer
    },
    data() {
        return {
            name: 'danxinyao',
            playerOptions: {
                autoplay: true,
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                //width: document.documentElement.clientWidth,
                //height: document.documentElement.clientHeight,
                sources: [{
                    type: "video/mp4",
                    src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                }],
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true //全屏按钮
                }
            },
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                title: '',
                uname: '',
                checker: '',
                tuijianren: '',
                status: ''
            },
        }
    },
    computed: {
        ...mapGetters([
            'account',
            'demoList'
        ]),
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [{
                        type: 'select',
                        label: '团队名称',
                        model: 'teamname'
                    },
                    {
                        type: 'input',
                        label: '真实姓名',
                        model: 'uname'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [{
                        type: 'input',
                        label: '上级',
                        model: 'checker',
                    },
                    {
                        type: 'input',
                        label: '推荐人',
                        model: 'tuijianren'
                    },
                    {
                        type: 'select',
                        label: '状态',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [{
                                value: 0,
                                text: '禁用'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    }
                ]
            }
        }
    },
    mounted() {
        this.setDemo({ name: 'danxinyao' })
        console.log('name', this.demoList)
        this.setLocalStorage()
    },
    methods: {
        ...mapActions([
            'setAuth',
            'setDemo'
        ]),
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {},
        //设置缓存 
        setLocalStorage() {
            localStorage.setItem('name', 'caonima')
            console.log(localStorage.getItem('name'))
        }
    }
}
