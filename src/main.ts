import { createApp } from 'vue'
import App from './App.vue'
// 初始化 css . 让所有的浏览器默认样式看起来都统一
import 'normalize.css' // 并没有处理 h1 这些标签的默认样式
import './assets/styles/common.less' // 默认公共样式
import { createPinia } from 'pinia'
const pinia = createPinia()

import router from '@/router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
