import { App } from "vue";
import XtxSkeleton from './skeleton/index.vue'

export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
  }
}