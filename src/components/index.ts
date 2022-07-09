import { App } from "vue";
import XtxSkeleton from './skeleton/index.vue'
import XtxCarousel from './carousel/index.vue'
import XtxMore from './more/index.vue'
import { useIntersectionObserver } from "@vueuse/core";
import defaultImg from '@/assets/images/200.png'

export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    // 全局注册指令
    // 参数1: 指令名
    // 参数2: 配置项
    app.directive('lazy', {
      mounted(el, binding) {
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
          // el: 当前指令绑定的 DOM 元素
          // 逻辑: 当 el 进入可是区域后, 给它设置 src 属性
          if(isIntersecting) {
            el.src = binding.value
          }
        })
        el.onerror = function() {
          el.src = defaultImg
        }
        
      }
    })
  }
}