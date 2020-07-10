import {
  Text,
  Sprite,
  Texture,
  Graphics,
  Container,
  TextStyle  
} from "pixi.js";

export const rootOps = {
  createElement: (tag)=> {
    let element = null
    if (tag === "Rectangle") {
      // 创建一个矩形
      element = new Graphics();
      element.lineStyle(4, 0xff3300, 1);
      element.beginFill(0x66ccff);
      element.drawRect(0, 0, 64, 64);
      element.endFill();
      element.x = 0;
      element.y = 0;
      // Opt-in to interactivity
      element.interactive = true;
      // Shows hand cursor
      element.buttonMode = true;
    } else if (tag === 'circle') {
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
  insert: (el, parent)=> {
    parent.addChild(el)
  },
  patchProp: (el, key, pervValue, nextValue)=> {
    
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
  setElementText: (el, text)=> {
    console.log('setElement', text)
    const _text = new Text(
      text, 
      {fontSize: 30, fill: 0xffffff, align: 'center'}
    )
    _text.width = el._text
    _text.setTransform(-52, -20)
    el.addChild(_text)
  },
  createText: (text)=> {
    return new Text(text, {fontSize: 30})
  },
  setText: (node, text) => {
    node.nodeValue = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling
}