<template>
  <div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem >{{ categoryStore.topCategory.name }}</XtxBreadItem>
      </XtxBread>

      <!-- 轮播图组件 -->
      <XtxCarousel :slides='home.bannerList' style="height: 500px;"/>

      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in topCategory.children" :key="item.id">
            <a href="javascript:;">
              <img v-lazy='item.picture'>
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- 分类关联商品 -->
      <div v-if="topCategory.children" class="ref-goods" v-for="sub in topCategory.children" :key="sub.id">
        <div class="head">
          <h3>- {{ sub.name }} -</h3>
          <p class="tag"></p>
          <XtxMore />
        </div>
        <div class="body">
          <GoodsItem :goods="item" v-for="item in sub.goods" :key="item.id" />
        </div>
      </div>
      
       <!-- 分类关联商品骨架屏 -->
      <div v-else class="ref-goods" v-for="sub in 5 " :key="sub">
        <div class="head">
          <h3><XtxSkeleton :height="30" :width="300" animated /></h3>
          <p class="tag"></p>
          <XtxSkeleton style="position: absolute; right: 20px; top: 40px;" :height="21" :width="70" animated />
        </div>
        <div class="body" style="display: flex; justify-content: space-between;">
          <XtxSkeleton :height="300" :width="200" animated v-for="item in 5" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="TopCategory" setup>
import useStore from '@/store';
import { storeToRefs } from 'pinia';
import { watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from './goods-item.vue'
const route = useRoute()

const { categoryStore, home } = useStore()
// 使用 watch 监听 id 数据变化， 发送请求获取数据
// watch(() => route.params.id, () => {
//   // 监听路由变化之后, 从分类跳到首页, 会报错, 需要判断路由地址是否正确
//   if(route.fullPath === `/category/${route.params.id}`) {
//     categoryStore.getTopCategory(route.params.id as string)
//   }
// },
// {
//   immediate: true // 首次执行
// })
home.getBannerList()
const { topCategory } = storeToRefs(categoryStore)
watchEffect(() => {
  // console.log(route.fullPath !== `/category/${route.params.id}`);
  if(!route.params.id) return
  if(route.fullPath !== `/category/${route.params.id}`) return
  categoryStore.getTopCategory(route.params.id as string)
})
</script>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}

 .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
</style>