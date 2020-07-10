import {
  h,
  toRefs,
  reactive,
  onMounted,
  onUnmounted,
  defineComponent
} from '@vue/runtime-core';
import Map from '../component/Map';
import Plane from "../component/Plane";
import Bullet from "../component/Bullet";
import { getGame } from '../Game';

export default defineComponent({
  setup() {
    // ref 处理值类型 响应式
    // reactive 处理对象类型 响应式
    const planeInfo = useCreatePlaneInfo()
    const bullets = reactive([{
      x: 10, 
      y: 10
    }])
    const handleAttack = (info)=> {
      const createBulletInfo = ()=> {
        return {
          ...info
        }
      }
      bullets.push(createBulletInfo())
    }
    getGame().ticker.add(()=>{
      moveBullets()
    })
    
    return {
      bullets,
      planeInfo,
      handleAttack
    }
  },
  render(ctx) {
    return h("Container", [
      h(Map),
      h(Plane, {...ctx.planeInfo})
    ])
  }
})
const moveBullets = (bullets)=> {
  const speed = 5
  bullets.forEach(bulletItem=> {
    bulletItem.y += speed;
  })
}
const useCreatePlaneInfo = ()=> {
  const planeInfo = reactive({
    x: 150,
    y: 200
  })

  const {x, y} = useMovePlane(planeInfo.x, planeInfo.y)
  planeInfo.x = x
  planeInfo.y = y
  return planeInfo
}
const handleKeyDown = (e)=> {
  const speed = 15;
  switch(e.code) {
    case "ArrowUp":
      planeInfo.y -= speed;
      break;
    case "ArrowDown":
      planeInfo.y += speed;
      break;
    case "ArrowLeft":
      planeInfo.x -= speed;
      break;
    case "ArrowRight":
      planeInfo.x += speed;
      break;
  }
}
const useMovePlane = (initX,initY)=> {
  const point = reactive({
    x: initX,
    y: initY
  })
  // 按键
  // remove
  // 生命周期
  // onMounted,
  // onUnmounted,
  onMounted(()=> {
    window.addEventListener("keydown", handleKeyDown)
  })
  onUnmounted(()=> {
    window.removeEventListener("keydown", handleKeyDown)
  })
  return toRefs(point)
}