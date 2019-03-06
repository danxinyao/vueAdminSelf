<template>
  <pg-content>
    <h2 class="title">我是折线图 </h2>
    <div style="padding:10px 0;">
      <a-player :music="songList" :showlrc="3" :narrow="false" theme="#000000" mode="circulation" v-if="flag" listmaxheight='96px' ref="player"></a-player>
    </div>
  </pg-content>
</template>
<style type="text/css" lang="less" scoped>
    .title {
        color: green;
    }
    .echarts {
      width: 100%;
      height: 500px;
    }
    .m-colorPicker {
      width: 100px;
      height: 100px;
    }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
