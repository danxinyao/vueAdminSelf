import VueAplayer from 'vue-dplayer'
export default {
    components: {
        //别忘了引入组件
        'a-player': VueAplayer
    },
    data() {
        return {
            flag: false,
            musicList: '',
            songList: []
        }
    },
    mounted() {
        //异步加载，先加载出player再使用
        this.init();
        let aplayer = this.$refs.player.control;
        aplayer.play();
    },
    methods: {
        init() {
            let obj ={
                url: 'http://stream8.qqmusic.qq.com/117030812.wma',
                title: 'danxinwu',
                author: 'danxinwu1'
            }
            this.songList.push(obj);
            this.flag = true;
/*            if (data && data.data.showapi_res_code == 0) {
                this.musicList = data.data.showapi_res_body.pagebean.songlist;

                for (let i = 0; i <= this.musicList.length; i++) {
                    if (i <= 9) {
                        let obj = {};
                        //url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词
                        //其中url必须有，其他的都是非必须
                        obj.title = this.musicList[i].songname;
                        obj.author = this.musicList[i].singername;
                        obj.url = this.musicList[i].url;
                        obj.pic = this.musicList[i].albumpic_small;
                        obj.lrc = this.musicList[i].irl;
                        //把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了
                        this.songList.push(obj);
                    }
                }
                //因为是异步请求，所以一开始播放器中是没有歌曲的，所有给了个v-if不然会插件默认会先生成播放器，导致报错(这个很重要)
                this.flag = true;
            };*/
        }
    }
}
