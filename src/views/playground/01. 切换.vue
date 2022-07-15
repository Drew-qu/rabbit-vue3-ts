<template>
  <button @click="checked">点击切换</button><br>
  <transition>
    <img ref="target" src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg" alt="">
  </transition>
</template>

<script lang="ts" setup>
// import { useIntersectionObserver } from '@vueuse/core'
// import { ref } from 'vue'
// const target = ref<HTMLImageElement | null>(null)
// useIntersectionObserver(target, ([{isIntersecting }]) => {
//   if(isIntersecting) {
//     target.value!.src = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg' 
//   }

// })
const checked = () => {

}
</script>

<style lang="less" scoped>
div {
  height: 3000px;
}

.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: all 0.5s;
}.v-leave-to {
  opacity: 0;
}
</style>