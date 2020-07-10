import {
  h,
  defineComponent,
  defineAsyncComponent
} from '@vue/runtime-core';
import { PAGE } from '../page' 
import startPage from '../../assets/start_page.jpg';
import startBtn from '../../assets/startBtn.png';

export default defineComponent({
  props: ["handleNextPage"],
  steup(props, ctx) {
    const handleStartGame = ()=> {
      props.handleNextPage('')
    }
    return {
      handleStartGame
    }
  },
  render(ctx) {
    return h("Container",
      [
        h("Sprite", {texture: startPage}),
        h("Sprite", {
          texture: startBtn, 
          x: 230, 
          y: 515,
          on: {
            pointertap: ctx.handleStartGame
          },
          interactive: true,
          buttonMode: true
        }),
      ]
    )
  }
})