import React from "react";

class Control extends React.Component {
  constructor() {
    super();
    this.state = {
      tet: "",
      content: "",
      city: "上海",
      cityOptions: [
        { id: 1, name: "上海" },
        { id: 2, name: "北京" },
        { id: 3, name: "广州" },
      ],
      isChecked: false,
    };
    this.changeTet = this.changeTet.bind(this);
  }
  changeTet(e) {
    this.setState({
      tet: e.target.value,
    });
  }
  changeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }
  changeSelect(e) {
    this.setState({
      city: e.target.value,
    });
  }
  changeCheckBox(e) {
    this.setState({
      isChecked: e.target.checked,
    });
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input
          onChange={this.changeTet}
          value={this.state.tet}
          placeholder="请输入文本信息"
        ></input>
        {/* 富文本框 */}
        <textarea
          value={this.state.content}
          placeholder="请输入文本内容"
          onChange={(this.changeContent = this.changeContent.bind(this))}
        ></textarea>
        {/* 下拉框 */}
        <select
          value={this.state.city}
          onChange={(this.changeSelect = this.changeSelect.bind(this))}
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
          checked={this.state.isChecked}
          onChange={(this.changeCheckBox = this.changeCheckBox.bind(this))}
        ></input>
      </div>
    );
  }
}
export default Control;
