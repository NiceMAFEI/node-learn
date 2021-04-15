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
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
        if(value > this.X) { // 向右走
          value = this.X - 10; // 回退
        }else { // 向左走
          value = this.X + 10; // 回退
        }
    } 
      this.moveBody();
      this.head.style.left = value + "px";
      this.checkHeadBody()
    
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) {
      throw new Error("小🐍死去了");
    }else if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if(value > this.Y) { // 向下走
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
      
    }
      this.moveBody();
      this.head.style.top = value + "px";
      this.checkHeadBody()
    
  }
  set isLive(boolean: boolean) {
    this._isLive = boolean;
  }
  //   添加身体
  addBody() {
    // 将div添加到element的最后
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  // 🐍身体移动
  moveBody() {
    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 设置
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }
  /**
   * 检查🐍头是否撞到身体的方法
   */
  checkHeadBody() {
    // 获取所有的身体，检查其是否和舌头的坐标发生重叠
    for(let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('你吃了你自己！')
      }
    }
  }
}

export default Snake;