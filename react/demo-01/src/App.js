import React from "react";
import "./App.css";
import { Input, Form, Button, Card } from "element-react";
class App extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
  }
  state = {
    form: {
      // 评论人
      peopleName: "",
      // 评论内容
      content: "",
    },
    messageBoard: [],
  };
  /**
   * @name 值的改变
   */
  valueChange(key, e) {
    const obj = { ...this.state.form };
    obj[key] = e;
    this.setState({
      form: obj,
    });
  }
  /**
   * @name 发布留言
   */
  submit() {
    console.log("====================================");
    console.log(this.formRef.current);
    console.log("====================================");
    const arr = [...this.state.messageBoard];
    arr.push({
      name: this.state.form.peopleName,
      value: this.state.form.content,
    });
    this.setState({
      messageBoard: arr,
    });
    this.setState({
      form: {
        // 评论人
        peopleName: "",
        // 评论内容
        content: "",
      },
    });
  }
  render() {
    return (
      <div className="main_container">
        <Form
          ref={this.formRef}
          labelWidth="120"
          model={this.state.form}
          className="main"
        >
          <Form.Item label="评论人：">
            <Input
              type="text"
              value={this.state.form.peopleName}
              onChange={this.valueChange.bind(this, "peopleName")}
            />
          </Form.Item>
          <Form.Item label="评论内容：">
            <Input
              type="textarea"
              autosize={{ minRows: 2, maxRows: 4 }}
              placeholder="请输入内容"
              value={this.state.form.content}
              onChange={this.valueChange.bind(this, "content")}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.submit.bind(this)}>
              发布
            </Button>
          </Form.Item>
        </Form>
        {this.state.messageBoard.map((item, index) => {
          return (
            <Card
              className="box-card"
              style={{ width: "400px", margin: "6px auto" }}
              key={index}
            >
              <div className="text item">评论人：{item.name}</div>
              <div className="text item" style={{ marginTop: "12px" }}>
                评论内容：{item.value}
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default App;
