<script lang="ts" setup name="SubCategory">
import useStore from '@/store';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const { categoryStore } = useStore()
const { subCategory } = storeToRefs(categoryStore)
watchEffect(() => {
  if(route.fullPath !== '/category/sub/' + route.params.id) return
  categoryStore.getSubCategory(route.params.id as string)
})
</script>
<template>
  <div class="category">
    <div class="container">
      <XtxBread>
        <XtxBreadItem>首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${subCategory.parentId}`">{{ subCategory.parentName }}</XtxBreadItem>
        <XtxBreadItem>{{ subCategory.name}}</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>

<style></style>
