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
  direction: string = "";
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
}

export default GameControl;
