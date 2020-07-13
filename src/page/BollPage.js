import {
  h,
  ref,
  toRefs,
  onMounted,
  onUnmounted,
  defineComponent
} from '@vue/runtime-core';
import { getGame } from '../Game';
export default defineComponent({
  setup() {
    const x = createTicker()
    return {
      x
    }
  },
  render(ctx) {
    return h("circle",
      {
        x: ctx.x,
        y: 100,
        width: 100,
        height: 100
      }
    )
  }
})

// 执行ticker
const runTicker = (handle) => {
  getGame().ticker.add(handle)
}

// 移除ticker
const removeTicker = (handle) => {
  getGame().ticker.add(handle)
}

// 创建Ticker调用
const createTicker = () => {

  const x = ref(50)     // 初始坐标
  const speed = 5       // 步长
  const maxWidht = 700  // 最大宽度
  let _arrow = true     // 方向
  // 移动回调
  const handleTicker = () => {
    x.value = _arrow ? x.value + speed : x.value - speed
    if (x.value >= maxWidht) {
      _arrow = false
    }
    if (x.value <= 50) {
      _arrow = true
    }
  }
  // 挂载
  onMounted(() => {
    runTicker(handleTicker)
  })
  // 销毁
  onUnmounted(() => {
    removeTicker(handleTicker)
  })
  return x
}