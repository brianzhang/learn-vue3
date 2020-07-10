import {
  h,
  ref,
  onMounted,
  onUnmounted,
  defineComponent
} from '@vue/runtime-core';
import { getGame } from '../Game';

// 地图图片 import
import mapImg from '../../assets/map.jpg';
import { GAME_CONFIG } from "../utils/constate";

// 地图
export default defineComponent({
  setup(props, ctx) {
    const mapHeight = GAME_CONFIG.height;
    let y1 = ref(0);
    let y2 = ref(-mapHeight);

    const speed = 1;

    const handleTicker = () => {
      y1.value += speed;
      y2.value += speed;

      if (y1.value >= mapHeight) {
        y1.value = -mapHeight;
      }

      if (y2.value >= mapHeight) {
        y2.value = -mapHeight;
      }
    };

    onMounted(() => {
      getGame().ticker.add(handleTicker);
    });

    onUnmounted(() => {
      getGame().ticker.remove(handleTicker);
    });

    return {
      y1,
      y2,
    };
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", {
        y: ctx.y1,
        texture: mapImg,
        key: "1",
      }),
      h("Sprite", {
        y: ctx.y2,
        texture: mapImg,
        key: "2",
      }),
    ]);
  },
});