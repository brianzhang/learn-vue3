import {
  h,
  ref,
  defineComponent
} from '@vue/runtime-core';
import { getGame } from '../Game';
// 地图图片 import

export default defineComponent({
  setup() {
    const mapHeight = 1080;
    // 创建一个响应式对象 ref
    const mapY1 = ref(0)
    const mapY2 = ref(-mapHeight)
    // 让地图动起来
    // y++
    // 循环
    
    const speed = 5;
    getGame().ticker.add(()=> {
      mapY1.value += speed;
      mapY2.value += speed;
      if (mapY1.value >= mapHeight) {
        mapY1.value = 0
      }
      if (mapY2.value >= mapHeight) {
        mapY2.value = -mapHeight
      }
    })
    return  {
      mapY1,
      mapY2
    }
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", {texture: '', y: ctx.mapY1.value}),
      h("Sprite", {texture: '', y: ctx.mapY2.value})
    ])
  }
})