<script lang="ts" setup name="Layout">
import AppTopnav from './component/app-topnav.vue';
import AppHeader from './component/app-header.vue';
import AppFooter from './component/app-footer.vue';
import AppHeaderSticky from './component/app-header-sticky.vue';

import useStore from '@/store';
const { categoryStore } = useStore()
categoryStore.getAllCategory()

</script>
<template>
  <AppTopnav />
  <AppHeader />
  <AppHeaderSticky></AppHeaderSticky>
  <main class="app-body">
    <!-- 路由出口 -->
    <RouterView></RouterView>
  </main> 
  <AppFooter />
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>