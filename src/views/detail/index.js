import { goods as ajax } from 'services'
export default {
    data() {
        return {
            des: {},
            goodsID: '',
            config: {
                url: 'https://www.baidu.com', // 网址，默认使用 window.location.href
                source: '空间会用到', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
                title: 'danxinwufenxiaong', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
                description: '认读取head标签', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
                image: '<img data-v-a55e89fe="" alt="" src="http://api.sdhongrong.com/Upload/Img/Goods/9fa303c9-0397-4e1b-acc2-2d4e5a205d35/5d324166-54bd-4a1c-a124-aea06544b113.png?v=1494407329966">', // 图片, 默认取网页中第一个img标签
                sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
                //disabled: ['google', 'facebook', 'twitter'], // 禁用的站点
                wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
                wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
            },
            vshareConfig: {
                shareList: ['more','tqq','weixin'],// 此处放分享列表（ID）
                common: {
                    bdText: 'bdText',
                    bdDesc: 'bdDesc',
                    bdUrl: 'https://www.baidu.com',
                    bdPic: 'http://api.sdhongrong.com/Upload/Img/Goods/9fa303c9-0397-4e1b-acc2-2d4e5a205d35/5d324166-54bd-4a1c-a124-aea06544b113.png?v=1494407329966',
                },//此处放置通用设置
                share: [{
                    bdSize: 32
                }],//此处放置分享按钮设置
                slide: [],//此处放置浮窗分享设置
                image: [],//此处放置图片分享设置
                selectShare: []//此处放置划词分享设置
            },

        }
    },
    mounted() {
        //接受上个页面传递过来的参数 
        this.goodsID = this.$route.query.goodsID
        console.log(this.$route.query)
        this.getDetail()
    },
    methods: {
        //查询商品详情 
        getDetail() {
            ajax.getGoodsDetail(this.goodsID).then((res) => {
                this.des = res
            })
        }
    }
}
