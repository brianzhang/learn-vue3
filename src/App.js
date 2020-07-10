import {
  h,
  ref,
  computed,
  defineComponent,
} from '@vue/runtime-core';
import {PAGE, getPageComponent } from './page'

// template -> render
const App = defineComponent({
  setup() {
    // 创建响应式对象
    // ref 创建响应式对象
    // 值类型 string number bool
    const currentPageName = ref(PAGE.start)
    // 依赖别的属性的属性
    // 计算属性
    const currentPage = computed(()=> {
      return getPageComponent(currentPageName.value)
    })
    const handleNextPage = (nextPage) => {
      console.log(nextPage)
      currentPageName.value = nextPage;
    };
    // 返回数据
    return {
      currentPage,
      handleNextPage
    }
  },
  render(ctx) {
    return h('Container', [
      h(ctx.currentPage, {handleNextPage: ctx.handleNextPage})
    ])
  }
})

export default App;