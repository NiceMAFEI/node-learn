/**
 * 游戏控制器
 *  控制其他所有的类
 */
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
  // 🐍
  snake: Snake;
  // 食物
  food: Food;
  // 计分板
  scorePanel: ScorePanel;
  //   🐍的移动方向， 按键的方向
  direction: string = "Right";
  // 构造函数
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }
  // 游戏初始化， 调用  游戏开始
  init() {
    //   绑定键盘按键按下的时间
    document.addEventListener("keydown", this.keyDownHandler);
    // 调用 run()
    this.run();
    /**
     * 当使用这种方式时可以使用第二种   keyDownHandler
     */
    // document.addEventListener("keydown", this.keyDownHandler.bind(this))
  }
  // 键盘按下的相应函数
  keyDownHandler = (event: KeyboardEvent) => {
    //   检查是否合法(上下左右正确按键)
    this.direction = event.key;
  };
  //   keyDownHandler(event: KeyboardEvent) {
  //       this.direction = event.key;
  //   }
  // 🐍动
  run() {
    /**
     * 根据 this.direction 来改变🐍的位置
     */
    // 获取🐍现在的坐标
    let x = this.snake.X;
    let y = this.snake.Y;

    // 根据按键方向，修改 x, y 值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下
        y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        // 向右
        break;
    }
    // 检查🐍是否吃到食物
    this.checkEat(x, y);
    // 改变snake的X和Y
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e) {
      alert(e + "GAME OVER!");
      this.snake.isLive = false;
    }
    this.snake.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  /**
   *
   * @param X 🐍的x坐标
   * @param Y 🐍的y坐标
   * @returns Boolean
   */
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物位置改变
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 🐍增加
      this.snake.addBody();
    }
  }
}

export default GameControl;
