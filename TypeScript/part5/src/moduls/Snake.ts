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
  private _isLive: boolean = true;
  constructor() {
    //   获取🐍头
    this.head = document.querySelector("#snake>div") as HTMLElement;
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
  /**
   * 获取🐍是否还活着
   */
  get isLive(): boolean {
    return this._isLive;
  }
  /**
   * 建立🐍的坐标， 并且判断是否结束游戏
   */
  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > 290) {
      throw new Error("小🐍死去了");
    } else {
      this.head.style.left = value + "px";
    }
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) {
      throw new Error("小🐍死去了");
    } else {
      this.head.style.top = value + "px";
    }
  }
  set isLive(boolean: boolean) {
    this._isLive = boolean;
  }
  //   添加身体
  addBody() {
    // 将div添加到element的最后
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
