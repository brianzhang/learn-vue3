import {
  h,
  onMounted,
  onUnmounted,
  defineComponent
} from '@vue/runtime-core';
// import * as PIXI from "pixi.js";
import PIXI from 'pixi-sound';
import { getGame } from '../Game';
import { PAGE } from '../page';
import startPage from '../../assets/start_page.jpg';
import startBtn from '../../assets/startBtn.png';

export default defineComponent({
  props: ["handleNextPage"],
  setup(props, ctx) {
    // const starBg = PIXI.sound.Sound.from(bgm)
    const handleStartGame = ()=> {
      props.handleNextPage(PAGE.play)
    }
    return {
      handleStartGame
    }
  },
  render(ctx) {
    console.log(ctx)
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