import { App } from "vue";
import XtxSkeleton from './skeleton/index.vue'
import XtxCarousel from './carousel/index.vue'
import XtxMore from './more/index.vue'
import { useIntersectionObserver } from "@vueuse/core";
import defaultImg from '@/assets/images/200.png'
import XtxBread from './bread/index.vue'
import XtxBreadItem from './bread/item.vue'
import XtxCity from './city/index.vue'
import NumBox from './Numbox/index.vue'
import XtxButton from './button/index.vue'
import XtxCheckbox from './checkbox/index.vue'

export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)
    app.component(XtxCity.name, XtxCity)
    app.component(NumBox.name, NumBox)
    app.component(XtxButton.name, XtxButton)
    app.component(XtxCheckbox.name, XtxCheckbox)
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