import "./style/index.less";

class Food {
  // 定义一个属性对应元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素，并赋值给element
    this.element = document.getElementById("food")!;
  }
}
