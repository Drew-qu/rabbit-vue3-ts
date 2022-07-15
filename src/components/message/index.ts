
import { h, render } from "vue";
import message from "./message.vue";

type Options = {
  type: 'success' | 'error' | 'warning'
  text: string
}

export function Message( Options: Options) {
  const VNode = h(message, Options)
  render(VNode, document.body)
}