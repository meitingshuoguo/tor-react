class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(VChild) {
    VChild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export class Component {
  constructor() {
    this.children = [];
  }

  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    // 所以说自定义组件必须实现render方法
    let VDom = this.render();
    VDom.mountTo(parent);
  }
  appendChild(VChild) {
    this.children.push(VChild);
  }
}

export let ToyReact = {
  createElement(type, attributes, ...children) {
    // console.log(arguments);
    // 两种type分别对应原生dom和自定义组件
    let element;

    if (typeof type === "string") {
      element = new ElementWrapper(type);
    } else {
      // 这里的type即为传过来的MyComponent
      element = new type();
    }

    for (const name in attributes) {
      element.setAttribute(name, attributes[name]);
    }

    let insertChildren = (children) => {
      for (let child of children) {
        if (typeof child === "object" && child instanceof Array) {
          insertChildren(child);
        } else {
          if (
            !(child instanceof Component) &&
            !(child instanceof ElementWrapper) &&
            !(child instanceof TextWrapper)
          ) {
            child = String(child);
          }
          if (typeof child === "string") {
            child = new TextWrapper(child);
          }
          element.appendChild(child);
        }
      }
    };
    insertChildren(children);

    return element;
  },

  render(VDom, element) {
    VDom.mountTo(element);
  },
};
