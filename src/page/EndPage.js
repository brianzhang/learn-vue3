import {
  h,
  defineComponent
} from '@vue/runtime-core';
import { PAGE } from '../page'
import startPage from '../../assets/start_page.jpg';
import startBtn from '../../assets/startBtn.png';

export default defineComponent({
  props: ["handleNextPage"],
  setup(props, ctx) {
    console.log('end page....')
    const handleStartGame = () => {
      props.handleNextPage(PAGE.play)
    }
    return {
      handleStartGame
    }
  },
  render(ctx) {
    return h("Container",
      [
        h("Sprite", { texture: startPage }),
        h("Sprite", {
          x: 230,
          y: 515,
          texture: startBtn,
          interactive: true,
          buttonMode: true,
          on: {
            pointertap: ctx.handleStartGame
          },
        }),
      ]
    )
  }
})