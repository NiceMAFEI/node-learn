// 受控组件
import React from "react";

class Control extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      content: "",
      city: "上海",
      cityOptions: [
        { id: 1, name: "上海" },
        { id: 2, name: "北京" },
        { id: 3, name: "广州" },
      ],
      isChecked: false,
    };
  }
  /**
   * @name 混合处理函数
   */
  minxFunction(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input
          onChange={(this.minxFunction = this.minxFunction.bind(this))}
          value={this.state.text}
          type="text"
          name="text"
          placeholder="请输入文本信息"
        ></input>
        {/* 富文本框 */}
        <textarea
          value={this.state.content}
          name="content"
          placeholder="请输入文本内容"
          onChange={(this.minxFunction = this.minxFunction.bind(this))}
        ></textarea>
        {/* 下拉框 */}
        <select
          value={this.state.city}
          name="city"
          onChange={(this.minxFunction = this.minxFunction.bind(this))}
        >
          {this.state.cityOptions.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        {/* 复选框 */}
        <input
          type="checkbox"
          name="isChecked"
          checked={this.state.isChecked}
          onChange={(this.minxFunction = this.minxFunction.bind(this))}
        ></input>
      </div>
    );
  }
}
export default Control;
