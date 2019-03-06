export default {
    data() {
        return {
            content: ''
        }
    },
    mounted() {
        this.content = 'keaiba'
    },
    methods: {
        save() {
            console.log(this.content)
        }
    }
}
