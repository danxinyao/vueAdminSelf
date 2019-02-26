export default {
    data() {
        return {
            logining: false,
            form: {
                userName: 'wuxin',
                password: '123456',
                grant_type: 'password',
                scope: 'pc'
            },
            rules: {
                userName: [
                    { 
                        required: true, 
                        message: '请输入账号', 
                        trigger: 'blur' 
                    }
                ],
                
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            },
            checked: true
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$router.push('/main')
                }
                else {
                    return false
                }
            })
        }
    }
}