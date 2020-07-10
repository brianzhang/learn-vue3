import {
  h,
  ref,
  watch,
  defineComponent
} from '@vue/runtime-core';

import bunnySelfImagePath from "../../assets/bullet.png";
import bunnyImagePath from "../../assets/bullet.png";

export const SelfBulletInfo = {
  width: 61,
  height: 99,
  rotation: 0,
  dir: -1,
};
export const EnemyBulletInfo = {
  width: 61,
  height: 99,
  rotation: 0,
  dir: 1,
};

//炮弹
export default defineComponent({
  props: ["x", "y", "id", "rotation", "dir"],
  setup(props) {
    const x = ref(props.x);
    const y = ref(props.y);

    watch(props, (newProps) => {
      x.value = newProps.x;
      y.value = newProps.y;
    });

    return {
      x,
      y,
      rotation: props.rotation,
      dir: props.dir
    };
  },
  render(ctx) {
    return h("Sprite", {
      x: ctx.x,
      y: ctx.y,
      rotation: ctx.rotation,
      texture: ctx.dir === 1 ? bunnyImagePath : bunnySelfImagePath
    });
  },
});