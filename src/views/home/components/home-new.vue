<template>
  <div>
    <HomePanel ref="target" title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <template #right>
          <XtxMore to="/"></XtxMore>
      </template>
      <Transition name="fade">
        <!-- 面板内容 -->
        <ul class="goods-list" v-if="home.newList.length">
          <li v-for="item in home.newList" :key="item.id">
            <RouterLink to="/">
              <img
                v-lazy ="item.picture"
                alt=""
              />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
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
import HomePanel from './home-panel.vue';
import { useLazyData } from '@/utils/hooks'
import HomeSkeleton from './home-skeleton.vue';

const { home } = useStore()


// const target = ref(null)
// 原装封装
// useLazyData(target, () => home.getNewList())

// 借助引用数据类型的特性, 实现封装
// const target = useLazyData(() => home.getNewList())

// 极致精简 => 将 api 函数直接作为回调传入, 自动执行
const target = useLazyData(home.getNewList)

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
  }
}

</style>