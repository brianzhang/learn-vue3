import EndPage from './EndPage';
import BollPage from './BollPage';
import GamePage from './GamePage';
import StartPage from './StartPage';
/**
 * Router 定义
 * @over 结束页面
 * @boll 球移动页面
 * @play 玩游戏页面
 * @start 开始游戏页面
 */
export const PAGE = {
  over: 'EndPage',
  boll: 'BollPage',
  play: 'GamePage',
  start: 'StartPage'
}
// router map
const _PAGE_MAP = {
  [PAGE.over]: EndPage,
  [PAGE.play]: GamePage,
  [PAGE.boll]: BollPage,
  [PAGE.start]: StartPage,
}
/**
 * 获取页面组件
 * @param {*} pageName 页面名称
 */
export const getPageComponent = (pageName = 'StartPage') => {
  console.log('_PAGE_MAP', _PAGE_MAP)
  console.log(pageName)
  return _PAGE_MAP[pageName]
}