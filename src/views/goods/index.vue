<script lang="ts" setup>
import useStore from '@/store';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import GoodsImage from './components/goods-image.vue';
import GoodsSales from './components/goods-sales.vue';
import GoodsName from './components/goods-name.vue';
import GoodsSku from './components/goods-sku.vue';
import GoodsDetail from './components/goods-detail.vue';
import GoodsHot from './components/goods-hot.vue';
const { goods } = useStore()
const route = useRoute()
const count = ref(1)
watchEffect(() => {
  if(route.fullPath !== '/goods/' + route.params.id) return
  goods.resetGoodsInfo()
  goods.getGoodsInfo(route.params.id as string)
})

const hChange = (skuID: string) => {
  // 根据 skuID 找到 sku 对象
  const sku = goods.info.skus.find( item => item.id === skuID)
  if(!sku) return
  goods.info.price = sku.price
  goods.info.oldPrice = sku.oldPrice
}
</script>
<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <div style="height: 70px;">
        <transition name="fade-in-out">
          <XtxBread v-if="goods.info.categories">
            <XtxBreadItem to="/">首页</XtxBreadItem>
            <XtxBreadItem :to="`/category/${goods.info.categories[1].id}`">{{ goods.info.categories[1].name}}</XtxBreadItem>
            <XtxBreadItem :to="`/category/sub/${goods.info.categories[0].id}`">{{ goods.info.categories[0].name}}</XtxBreadItem>
            <XtxBreadItem>{{ goods.info.name }}</XtxBreadItem>
          </XtxBread>

          <XtxBread v-else>
            <XtxBreadItem to="/">首页</XtxBreadItem>
            <XtxBreadItem>
              <XtxSkeleton opacity="0.2" bg="#27bb9a" animated :width="28" :height="18" />
            </XtxBreadItem>
            <XtxBreadItem>
              <XtxSkeleton opacity="0.2" bg="#27bb9a" animated :width="76" :height="18" />
            </XtxBreadItem>
            <XtxBreadItem>
              <XtxSkeleton opacity="0.2" bg="#27bb9a" animated :width="156" :height="18" />
            </XtxBreadItem>
          </XtxBread>
        </transition>
      </div>
      <!-- 商品信息 -->
      <div v-if="goods.info.mainPictures" class="goods-info">
        <div class="media">
          <GoodsImage :images="goods.info.mainPictures"></GoodsImage>
          <GoodsSales :goods="goods.info" />
        </div>
        <div class="spec">
          <GoodsName :goods="goods.info" />
          <!-- 规格组件 -->
          <GoodsSku @change-sku="hChange" skuID="1369155864430120962" :goods="goods.info" />
          <XtxNumbox show-label :min="1" :max="10" v-model='count'/>
          <XtxButton type="primary" style="margin-top:20px">加入购物车</XtxButton>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer" v-if="goods.info.details">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">
            <!-- 商品详情 -->
            <GoodsDetail  :goods="goods.info"/>
          </div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
            <GoodsHot :type="1" />
            <GoodsHot :type="2" />
            <GoodsHot :type="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
</style>