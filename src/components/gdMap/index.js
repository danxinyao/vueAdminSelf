
export default {
    name: 'GdMap',
    props: {
        title: {
            type: String,
            default: '地点选择'
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dialogVisible: false,
            loc: null
        }
    },
    watch: {
        dialogVisible() {
            this.$emit('update:show', this.dialogVisible)
        },
        show() {
            this.dialogVisible = this.show
        }
    },
    mounted() {
        this.getMapMessage()
    },
    methods: {
        getMapMessage() {
            let that = this
            window.addEventListener('message', function(event) {
                let loc = event.data
                if (loc && loc.module == 'locationPicker') {
                    if (loc.latlng) {
                        that.loc = loc
                    }
                }
            })
        },
        confirm() {
            this.dialogVisible = false
            if (this.loc) {
                this.$emit('success', this.loc)
            }
        }
    }
}