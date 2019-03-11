export default {
    data() {
        return {
            showMap: false,
            mapData: {}
        }
    },
    mounted() {
    },
    methods: {
        open() {
            this.showMap = true
            console.log(this.content)
        },
        success(val) {
            this.mapData = val
            console.log(val)
        }
    }
}
