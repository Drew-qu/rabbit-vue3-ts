import { App } from "vue";
import XtxSkeleton from './skeleton/index.vue'
import XtxCarousel from './carousel/index.vue'

export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}