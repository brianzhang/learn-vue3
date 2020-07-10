import {
  h,
  defineComponent,
  defineAsyncComponent
} from '@vue/runtime-core';
import { PAGE } from '../page';
import startPage from '../../assets/start_page.jpg';
import startBtn from '../../assets/startBtn.png';

export default defineComponent({
  props: ["handleNextPage"],
  setup(props, ctx) {
    const handleStartGame = ()=> {
      console.log('handleStartGame')
      props.handleNextPage(PAGE.play)
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
          x: 225, 
          y: 515,
          on: {
            pointertap: ctx.handleStartGame,
            mouseout: function() {
              this.scale.set(1, 1)
            },
            mouseover: function() {
              this.scale.set(1.1, 1.1)
            }
          },
          interactive: true,
          buttonMode: true
        }),
      ]
    )
  }
})