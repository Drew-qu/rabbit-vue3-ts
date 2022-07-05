<template>
  <div>
    111  
  </div>
  <h1>hi的话手动觉得v篇</h1>
</template>

<script setup lang="ts">

import request from '@/utils/request'
request.get('/home/index').then(res => console.log(res))
</script>

<style scoped lang="less">
// less 引入语法: @import '文件路径'
@import './assets/styles/variables.less';
@import './assets/styles/mixins.less';
h1 {
  background-color: @xtxColor; // 使用引入文件内部变量 @变量名
  .hoverShadow ()  // 使用引入文件内部定义方法
}

</style>