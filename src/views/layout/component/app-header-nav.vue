<script lang="ts" setup name="AppHeaderNav">
import useStore from '@/store';
const { categoryStore } = useStore()

</script>

<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li
    @mousemove="categoryStore.show(item.id)" 
    @mouseleave="categoryStore.hide(item.id)"
    v-for="item in categoryStore.list" 
    :key="item.id" >
      <RouterLink 
      @click="categoryStore.hide(item.id)"
      :to="item.id ? `/category/${item.id}` : '/'" 
      > {{item.name}} </RouterLink>
      <!-- 盒子 -->
      <div class="layer" v-if="item.children" :class=" { open: item.open } ">
        <ul>
          <li 
          v-for="sub in item.children" 
          :key="sub.id">
            <RouterLink @click="categoryStore.hide(item.id)" :to="`/category/sub/${sub.id}`">
              <img
                :src="sub.picture"
                alt=""
              />
              <p>{{sub.name}}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 新增样式
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // > .layer {
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }
}
// 新增样式
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>