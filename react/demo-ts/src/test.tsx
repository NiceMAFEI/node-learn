import React from "react";
interface FatherInterface {
  name: String;
  age: Number;
}
interface StateInterface {
  name: String,
  age: Number
}
class Test extends React.Component<FatherInterface,StateInterface> {
  constructor(props: FatherInterface) {
    super(props);  
    this.state = {
      name: this.props.name,
      age: this.props.age,
    };
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
      </div>
    );
  }
}

export default Test;
