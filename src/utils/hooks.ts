import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

export function useLazyData(callback: () => void) {
  const target = ref(null)
  const { stop }= useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if( isIntersecting ) {
      callback()
      stop()
    }
  },
  {
    threshold: 0
  })
  return target
}