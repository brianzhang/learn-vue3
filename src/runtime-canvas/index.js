import {createRenderer} from '@vue/runtime-core';

import { rootOps } from '../utils/utils';

const renderer = createRenderer({
  ...rootOps
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}