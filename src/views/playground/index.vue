<template>
  <div>
    操场
  </div>
  <img ref="target" alt="">
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
const target = ref<HTMLImageElement | null>(null)
useIntersectionObserver(target, ([{isIntersecting }]) => {
  if(isIntersecting) {
    target.value!.src = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg' 
  }

})

</script>

<style lang="less" scoped>
div {
  height: 5000px;
}
</style>