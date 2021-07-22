import React from "react";
import Chlid from "./child";
interface Iprops {
  name: string;
  age: number;
}
interface Istate {
  name: string;
  age: number;
}
class Test extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
    };
  }
  parentAgeAdd(val: number) {
    this.setState({
      age: val,
    });
  }
  parentShowName(val: string) {
    this.setState({
      name: val,
    });
  }
  render(): React.ReactNode {
    // const {name,age} = this.props
    return (
      <div>
        <div>
          <span>姓名：</span>
          <span>{this.state.name}</span>
        </div>
        <div>
          <span>年龄：</span>
          <span>{this.state.age}</span>
        </div>
        父组件：{this.state.name}
        <Chlid
          age={12}
          showFn={this.parentShowName.bind(this)}
          addFn={this.parentAgeAdd.bind(this)}
        />
      </div>
    );
  }
}

export default Test;
