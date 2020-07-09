import {createRenderer} from '@vue/runtime-core';
import {
  Graphics,
  Text,
  Sprite,
  Container,
  TextStyle,
  Texture
} from 'pixi.js';
const renderer = createRenderer({
  createElement(tag) {
    let element = null
    if (tag === 'circle') {
      element = new Graphics()
      element.beginFill(0xff0000, 0.5);
      element.lineStyle(2, 0xffffff, 1)
      element.drawCircle(0,0,100);
      element.endFill();
    }else if (tag === "Sprite") {
      element = new Sprite();
      element.x = 0;
      element.y = 0;
    }else if (tag === "Container") {
      element = new Container();
      element.x = 0;
      element.y = 0;
    }else if(tag === "Text"){
      element = new Text()
      element.x = 0;
      element.y = 0;
    }
    return element;
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  patchProp(el, key, pervValue, nextValue) {
    if (key === "on" || key === "texture" || key === "style") {
      switch (key) {
        case "on":
          Object.keys(nextValue).forEach((eventName) => {
            const callback = nextValue[eventName];
            el.on(eventName, callback);
          });
          break;
        case "texture":
          let texture = Texture.from(nextValue);
          el.texture = texture;
          break;
        case "style":
          let style = new TextStyle(nextValue);
          el.style = style;
          break;
        case "anchor":
          el.anchor.set(...nextValue);
          break;
      }
    } else {
      el[key] = nextValue;
    }
  },
  setElementText(el, text) {
    console.log('setElement', text)
    const _text = new Text(
      text, 
      {fontSize: 30, fill: 0xffffff, align: 'center'}
    )
    _text.width = el._text
    _text.setTransform(-52, -20)
    el.addChild(_text)
  },
  createText (text) {
    return new Text(text, {fontSize: 30})
  },
  setText: (node, text) => {
    node.nodeValue = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}