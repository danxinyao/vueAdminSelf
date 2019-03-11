<template>
    <pg-content>
        <h2 class="title">我是腾讯地图 </h2>
        <h3 v-if="mapData.poiaddress != undefined">你选择的位置是:<span>{{mapData.poiaddress}}</span> 坐标为:<span>{{mapData.latlng.lat}} - {{mapData.latlng.lng}}</span> </h3>
        <tx-map :show.sync="showMap" @success="success"></tx-map>
        <div class="btns">
            <el-button type="primary" @click="open()">打开地图</el-button>   
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
