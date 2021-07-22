import React from "react";
import { MyContext } from "../App";
interface Iprops {
  age: number;
  addFn: (val: number) => void;
  showFn: (val: string) => void;
}
interface Istate {
  age: number;
}
class Chlid extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      age: 1,
    };
  }
  childAddAge = () => {
    this.setState(
      {
        age: this.state.age + 1,
      },
      () => {
        this.props.addFn(this.state.age);
      }
    );
    this.props.showFn("hahaha");
  };
  render(): React.ReactNode {
    return (
      <MyContext.Consumer>
        {(data: string): React.ReactNode => {
          return (
            <div>
              <span>生日：{data}</span>
              <button onClick={this.childAddAge}>点我</button>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
export default Chlid;
