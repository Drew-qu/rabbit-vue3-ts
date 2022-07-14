<template>
 <div>
  <!-- 
    vue2 的 v-model 和 vue3 的v-model 的区别
    vue2: 做了两件事
    1. 传入一个 value 属性
    2. 绑定一个 input 事件

    还提供了 .sync 修饰符, 弥补了 v-model 的不足
    v-model 只能绑定一次 (因为绑定的永远都是 value 和 input 事件)
    区别: 
    1. 子组件需要接受的值不是 value 而是自己定义的 money(由于可以自由定义, 所以可以定义多个)
    2. 触发事件也变成了 update: 属性名

    vue3: 
   -->
 </div>
</template>