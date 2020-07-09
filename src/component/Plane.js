import {
  h,
  ref,
  watch,
  toRefs,
  onMounted,
  onUnmounted,
  defineComponent
} from '@vue/runtime-core';
import { getGame } from '../Game';
// 飞机图片 import
export default defineComponent({
  props: ["x", "y"],
  setup(props) {
    const x = ref(props.x)
    const y = ref(props.y)
    const {x: x1, y: y1} = toRefs(props);
    // watch(props, (value)=> {
    //   x.value = value.x
    //   y.value = value.y
    // })
    const handleAttack = (e)=> {
      if (e.code === 'Space') {
        ctx.emit('', ()=> {
          
        })
      }
    }
    onMounted(()=> {
      window.addEventListener('keydown', handleAttack)
    })
    onUnmounted(()=> {
      window.removeEventListener('keydown', handleAttack)
    })
    return {
      x,
      y
    }
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", {texture: '', x: ctx.x, y: ctx.y})
    ])
  }
})