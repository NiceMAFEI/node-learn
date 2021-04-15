/**
 * 🐍
 */
class Snake {
  // 🐍头的元素
  head: HTMLElement;
  // 🐍身
  bodies: HTMLCollection;
  //   🐍
  element: HTMLElement;
  constructor() {
    //   获取🐍头
    this.head = document.querySelector("#snake >　div") as HTMLElement;
    // 获取🐍身体
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
    // 获取🐍
    this.element = document.getElementById("snake")!;
  }

  // 获取🐍头坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    this.head.style.left = value + "";
  }
  set Y(value: number) {
    this.head.style.top = value + "";
  };
//   添加身体
addBody() {
    // 将div添加到element的最后
    this.element.insertAdjacentHTML('beforeend', "<div></div>");
}
}

export default Snake