<script setup lang="ts" name="GoodsSku">
import {GoodsInfo, Spec, SpecValues} from '@/types/data'
import bwPowerSet from '@/utils/bwPowerSet';
const props = defineProps<{
  goods: GoodsInfo
}>()

const changeSelected = (item: Spec, sub: SpecValues) => {
  if(sub.selected) {
    // 如果被选中了, 取消选中
    sub.selected = false
  } else {

    // 干掉所有, 留下自己
    item.values.forEach(i => i.selected = false)
  
    // 让 sub 选中
    sub.selected = true
  }
}

// 测试 powerSet 算法
// const result = bwPowerSet([1, 2])
// console.log(result);

// console.log(props.goods.skus);
// 生成路径字典(对象/映射) => 传入一个 参数
function getPathMap() {
  // 1. 筛选出无效的数据(没有库存的)
  const skus = props.goods.skus.filter(i => i.inventory > 0)
  // console.log(skus);
  // 2. 创建一个路径字典
  const pathMap: any = {}
  skus.forEach(item => {
    // 3. 将 skus 转成字符串数组,
    // 算法需要字符串类型数组, 所以需要在对象数组转成字符串数组
    const arr = item.specs.map( v => v.valueName)
    const result = bwPowerSet(arr)
    // console.log(result);
    // 4. 往路径字典中, 添加属性
    result.forEach( arrItem => {
      const key = arrItem.join('☆')
      // 4.1 如果对象中没有这个属性, 就创建一个数组, 添加 id
      // xx in 对象: 表示判断 'xx' 是否是对象的属性, 有就返回 true, 没有就是 false
      if(key in pathMap) {
        pathMap[key].push(item.id)
      } else {
        // 4.2 如果对象中有这个属性, 直接添加 id 到数组
        pathMap[key] = [item.id]
      }
    })
    
  })
  return pathMap
}

const pathMap = getPathMap()
console.log(pathMap);





</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
          <img
            v-if="sub.picture"
            :class="{selected: sub.selected}"
            :src="sub.picture"
            alt=""
            :title="sub.name"
            @click="changeSelected(item, sub)"
          />
          <span 
          @click="changeSelected(item, sub)" 
          v-else 
          :class="{selected: sub.selected}">{{ sub.name }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
