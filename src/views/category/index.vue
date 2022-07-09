<template>
  <div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem >{{ categoryStore.topCategory.name }}</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>

<script lang="ts" name="TopCategory" setup>
import useStore from '@/store';
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const { categoryStore } = useStore()
// 使用 watch 监听 id 数据变化， 发送请求获取数据
watch(() => route.params.id, () => {
  // 监听路由变化之后, 从分类跳到首页, 会报错, 需要判断路由地址是否正确
  if(route.fullPath === `/category/${route.params.id}`) {
    categoryStore.getTopCategory(route.params.id as string)
  }
},
{
  immediate: true
})
</script>

<style></style>