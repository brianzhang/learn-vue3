import {createRenderer} from '@vue/runtime-core';

import { rootOps, patchProp } from '../utils/utils';

const renderer = createRenderer({
  ...rootOps,
//  patchProp
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}