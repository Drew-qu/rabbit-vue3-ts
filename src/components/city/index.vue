<script lang="ts" setup name="XtxCity">

export type cityItem = {
  code: string
  level: number
  name: string
  areaList: cityItem[]
}

export type CityResult = {
  provinceCode: string
  provinceName: string
  cityCode: string
  cityName: string
  countyCode: string
  countyName: string
}

import { ref, watchEffect } from 'vue';
import axios from 'axios';
import { onClickOutside } from '@vueuse/core'
const active = ref(false)
// 会被覆盖的
const cityList = ref<cityItem[]>([])
// 不会被覆盖的
const cacheList = ref<cityItem[]>([])

defineProps<{
  address: string
}>()

const emit = defineEmits<{
  (e: 'changeCity', city: CityResult): void
}>()

const cityResult = ref<CityResult>({} as CityResult)

// 发起请求拿数据
const getCityList = async() => {
  const res = await axios.get<cityItem[]>('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json')
  // console.log(res);
  cityList.value = res.data
  cacheList.value = res.data
}
getCityList()

// 选择城市之后, 继续下一级点击
const selectCity = (city: cityItem) => {
  // 选择城市时判断当前选择的是省 市 还是区
  if(city.level === 0) {
    // 选择的是省
    cityResult.value.provinceName = city.name
    cityResult.value.provinceCode = city.code
  }

  if(city.level === 1) {
    // 选择的是市
    cityResult.value.cityName = city.name
    cityResult.value.cityCode = city.code
  }

  if(city.level === 2) {
    // 选择的是区
    cityResult.value.countyName = city.name
    cityResult.value.countyCode = city.code

    // 通知父组件, 将数据带过去
    emit('changeCity', cityResult.value)
  }

  if(!city.areaList) return active.value = false
  // 重新赋值
  cityList.value = city.areaList
}

// 监听 active 的变化
watchEffect(() => {
  if(!active.value) cityList.value = cacheList.value
})

// 声明点击的目标
const target = ref(null)
// 点击目标以外的, 触发此函数
onClickOutside(target, () => {
  active.value = false
})
</script> 
<template>
  <div ref="target" class="xtx-city">
    <div class="select" @click=" active = !active " :class="{active}">
      <span v-if="address" class="placeholder">{{ address }}</span>
      <span v-else class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div v-show=" active " class="option">
      <span @click="selectCity(item)" class="ellipsis" v-for="item in cityList" :key="item.name">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>