
/**
 * 记分牌
 */
 class ScorePanel {
    score: number = 0;
    level: number = 1;
    // 最大等级
    maxLevel: number;
    // 升级条件
    upScore: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel: number = 10, upScore: number = 10) {
      this.maxLevel = maxLevel;
      this.upScore = upScore;
      this.scoreEle = document.getElementById("score")!;
      this.levelEle = document.getElementById("level")!;
    }
    // 设置加分方法
    addScore() {
      this.scoreEle.innerHTML = ++this.score + "";
      if(this.score % this.upScore === 0) {
        this.levelUp()
      }
    }
    // 等级
    levelUp() {
      // 最高级10级
      if (this.level < this.maxLevel) {
        this.levelEle.innerHTML = ++this.level + "";
      }
    }
  }

  export default ScorePanel