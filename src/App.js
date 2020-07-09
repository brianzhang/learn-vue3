import {
  h,
  ref,
  computed,
  defineComponent,
  defineAsyncComponent
} from '@vue/runtime-core';
import StartPage from './page/StartPage';
import GamePage from './page/GamePage';
import BollPage from './page/BollPage';
// template -> render
const App = defineComponent({
  setup() {
    // 创建响应式对象
    // ref 创建响应式对象
    // 值类型 string number bool
    const currentPageName = ref('BollPage')
    // 依赖别的属性的属性
    // 计算属性
    const currentPage = computed(()=> {
      // 响应式数据取值
      if (currentPageName.value === 'BollPage') {
        return BollPage
      }
      if (currentPageName.value === 'StartPage') {
        return StartPage;
      } else if(currentPageName.value === 'GamePage'){
        return GamePage;
      }
    })
    const handleNextPage = (nextPage) => {
      currentPageName.value = nextPage;
    };
    // 返回数据
    return {
      currentPage,
      handleNextPage,
      currentPageName
    }
  },
  render(ctx) {
    return h('Container', [
      h(ctx.currentPage, {handleNextPage: ctx.handleNextPage})
    ])
  }
})

export default App;