<script lang="ts" setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomePanel from './components/home-panel.vue';
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        
        <HomeBanner></HomeBanner>
      </div>
    </div>


    <!-- 新鲜好物 -->
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <template #right>
          <XtxMore to="/"></XtxMore>
      </template>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
    </HomePanel>

    <!-- 人气推荐 -->
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
        <div>图片</div>
    </HomePanel>
  </div>
</template>



<style lang="less" scoped></style>