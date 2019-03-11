<template>
    <el-dialog 
        :title="title"
        :visible.sync="dialogVisible"
        width="60%"
        append-to-body
        center>
        <iframe 
            id="map" 
            width="100%" 
            height="300px" 
            frameborder=0
            src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=4PLBZ-2FYKP-3C6DP-VG737-LB2DE-ZJBH7&referer=myapp">
        </iframe>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>