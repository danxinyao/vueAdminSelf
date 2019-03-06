<template>
    <pg-content>
        <h2 class="title">我是wangEdit </h2>
        <wang-editor :content.sync="content"></wang-editor>
        <div class="btns">
            <el-button type="primary" @click="save()">保存</el-button>   
        </div>
        
    </pg-content>
</template>
<style type="text/css" lang="less" scoped>
    .title {
        color: green;
    }
    .btns {
        margin-top: 50px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
      ...index
    }
</script>
