<template>
  <div>
    <HomePanel ref="target" title="人气推荐" subTitle="人气爆款 不容错过">
      <Transition name="fade">
        <!-- 面板内容 -->
        <ul class="goods-list" v-if="home.hotList.length">
          <li v-for="item in home.hotList" :key="item.id">
            <RouterLink to="/">
              <img
                v-lazy ="item.picture"
                alt=""
              />
              <p class="name ellipsis">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton :count="4" v-else />
      </Transition>
    </HomePanel>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/store';
// import { ref } from 'vue';
import HomePanel from './home-panel.vue';
// import { useIntersectionObserver } from '@vueuse/core'
import { useLazyData } from '@/utils/hooks';
import HomeSkeleton from './home-skeleton.vue';
const { home } = useStore()


// const target = ref(null)
// const { stop }= useIntersectionObserver(target, ([{ isIntersecting }]) => {
//   if( isIntersecting ) {
//     home.getHotList()
//     stop()
//   }
// })

const target = useLazyData(home.getHotList)
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}

</style>