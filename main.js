import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h3>nice!</h3>
        <div>Hello</div>
        {this.children}
        {true} or {false}
      </div>
    );
  }
}

let a = (
  <MyComponent name="nameValue" id="idValue">
    <div>React</div>
  </MyComponent>
);

ToyReact.render(a, document.body);

/* var a = ToyReact.createElement(
  "div",
  {
    name: "nameValue",
    id: "idValue",
  },
  ToyReact.createElement("span", null, "React"),
  ToyReact.createElement("span", null, "Hi")
);
document.body.appendChild(a); */

/* var a = ToyReact.createElement(
  MyComponent,
  {
    name: "nameValue",
    id: "idValue",
  },
  ToyReact.createElement("div", null, "React")
);
ToyReact.render(a, document.body); */
