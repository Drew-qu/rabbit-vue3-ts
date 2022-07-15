<template>
  <div ref="dv">

  </div>
</template>

<script lang="ts" setup>
import { h, ref, render, onMounted } from 'vue'
const dv = ref<HTMLDivElement | null>(null)

// 使用 js 创建一个组件
// h 函数 和 render 函数
// h 函数可以创建一个虚拟 DOM
// render 函数可以将虚拟 DOM 渲染到页面上

// 使用步骤：从 vue 中按需导入函数
// h 函数: 
// 参数1: type 类型, 需要创建什么虚拟 DOM, 可以传入标签名\组件对象
// 参数2: 标签的属性
// 参数3: 子节点 => 元素节点, 文本节点
// 返回值: 虚拟 DOM, VNode
const vnode = h('h1', { title: '年龄'}, '黄金三剑客')

onMounted(() => {
  // render函数: 
  // 参数1： 虚拟 DOM
  // 参数2： 挂载点（真实 DOM）
  render(vnode, dv.value as HTMLDivElement)
})
</script>

<style lang="scss" scoped>

</style>