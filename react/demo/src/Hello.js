import React from "react";
import "./css/index.css";
/**
 * @name 类组件
 */
// class Hello extends React.Component {
//   /**
//    * @name render
//    */
//   render() {
//     return (
//       <button className="div--click__point" onClick={this.handleClick}>
//         这是独立的组件
//       </button>
//     );
//   }
//   /**
//    * @name 点击事件
//    */
//   handleClick() {
//     console.log("====================================");
//     console.log("点击事件触发了");
//     console.log("====================================");
//   }
// }
/**
 * @name 函数组件
 */
// const Hello = () => {
//   const handleClick = () => {
//     console.log("====================================");
//     console.log("函数点击事件触发");
//     console.log("====================================");
//   };
//   return (
//     <button className="div--click__point" onClick={handleClick}>
//       点击
//     </button>
//   );
// };

/**
 * @name state的基本使用
 */
class Hello extends React.Component {
//   state = {
//     count: 0,
//   };

  /**
   * @name 箭头函数处理setState ----start
   */
  //   addCount = () => {
  //     this.setState({
  //       count: this.state.count+1,
  //     });
  //   };
  //   reduceCount = () => {
  //     this.setState({
  //       count: this.state.count-1,
  //     });
  //   };
  /**
   * @name 箭头函数处理setState ----end
   */

  /**
   * @name bind处理setState ---- starts
   */
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.addCount = this.addCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
  }
  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  reduceCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  /**
   * @name bing处理setState ---- end
   */

  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.reduceCount} style={{ marginLeft: "18px" }}>
          -
        </button>
      </div>
    );
  }
}

export default Hello;
