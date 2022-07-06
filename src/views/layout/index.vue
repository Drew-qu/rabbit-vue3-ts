<script lang="ts" setup name="Layout">
import AppTopnav from './component/app-topnav.vue';
import AppHeader from './component/app-header.vue';
import AppFooter from './component/app-footer.vue';

</script>
<template>
  <AppTopnav />
  <AppHeader />
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