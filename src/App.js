import {
  h,
  ref,
  computed,
  defineComponent,
} from '@vue/runtime-core';
import pixisound from 'pixi-sound';

import {PAGE, getPageComponent } from './page'
import startBg from '../assets/bgm.mp3';
import playBg from '../assets/play.mp3';
import endBg from '../assets/end.mp3';

// template -> render

const App = defineComponent({
  setup() {
    // 创建响应式对象
    // ref 创建响应式对象
    // 值类型 string number bool
    const currentPageName = ref(PAGE.start)
    pixisound.add("StartPage", startBg)
    pixisound.add("GamePage", playBg)
    pixisound.add("EndPage", endBg)
    // 依赖别的属性的属性
    // 计算属性
    const currentPage = computed(()=> {
      pixisound.play(currentPageName.value)
      return getPageComponent(currentPageName.value)
    })
    const handleNextPage = (nextPage) => {
      pixisound.stopAll()
      currentPageName.value = nextPage;
    };
    // 返回数据
    return {
      currentPage,
      handleNextPage
    }
  },
  render(ctx) {
    console.log(ctx.currentPage)
    return h('Container', [
      h(ctx.currentPage, {handleNextPage: ctx.handleNextPage})
    ])
  }
})

export default App;