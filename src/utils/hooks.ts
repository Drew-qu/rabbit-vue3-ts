import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'
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

export function useCountDown(count: number) {
  const time = ref(0)
  // 做倒计时
  // pause: 暂停
  // resume: 继续
  const { pause, resume } = useIntervalFn(() => {
    time.value--
    if (time.value === 0) pause()
  }, 1000, {
    immediate: false
  })

  const start = () => {
    if(time.value > 0)  return
    time.value = count
    resume()
  }
  return {
    time,
    resume,
    start
  }
}