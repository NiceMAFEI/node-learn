import "./style/index.less";

class Food {
  // 定义一个属性对应元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素，并赋值给element
    this.element = document.getElementById("food")!;
  }

  // 获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  };
  get Y() {
    return this.element.offsetTop;
  };

  // 修改食物位置 的方法
  change() {
    // 生成随机位置
    let top =  Math.round(Math.random() * 29) * 10
    let left =  Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}



