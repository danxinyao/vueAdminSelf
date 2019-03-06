<template>
    <div>
    <quill-editor style="height: 300px;" ref="myTextEditor" v-model="initContent" :config="editorOption" @blur="onEditorBlur(e)" @focus="onEditorFocus(e)">
    </quill-editor>
    <input type="file" hidden accept=".jpg,.png" ref="fileBtn" @change="handleChange"></div>
</template>
<style type="text/css" lang="less" scoped>
</style>
<script type="text/babel">
    import index from './index'
  export default {
    ...index
  }
</script>
