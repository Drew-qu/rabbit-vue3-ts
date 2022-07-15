
import { h, render } from "vue";
import message from "./message.vue";

type Options = {
  type: 'success' | 'error' | 'warning'
  text: string 
  duration?: number
}

export function Message( {type, text, duration = 2000}: Options) {
  // 创建一个 div 将其添加至 body
  const div = document.createElement('div')
  div.setAttribute('class', 'xtx-message-container')
  document.body.appendChild(div)
  // 创建虚拟 DOM 节点
  const VNode = h(message, { type, text })
  // 渲染到 div
  render(VNode, div) 
  setTimeout(()=> {
    render(null, div)
    // 移除 div
    div.remove()
  }, duration)
}

// 优化方案
// 函数身上的方法: 静态方法

Message.success = function(text: string, duration: number = 2000) {
  Message({
    type: 'success',
    text,
    duration
  })
}

Message.error = function(text: string, duration: number = 2000) {
  Message({
    type: 'error',
    text,
    duration
  })
}

Message.warning = function(text: string, duration: number = 2000) {
  Message({
    type: 'warning',
    text,
    duration
  })
}