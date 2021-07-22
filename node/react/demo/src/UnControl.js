import React from "react";
import ReactDOM from "react-dom";

/**
 * @name 非受控组件
 */
class UnControl extends React.Component {
  constructor() {
    super();

    //   创建ref
    this.txtRef = React.createRef();
  }
  getTxt(){
      console.log('====================================');
      console.log(this.txtRef.current.value);
      console.log('====================================');
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef} />
        <button onClick={(this.getTxt = this.getTxt.bind(this))}>
          获取文本框的值
        </button>
      </div>
    );
  }
}

export default UnControl;
