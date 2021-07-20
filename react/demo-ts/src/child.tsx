import React from "react";
interface Iprops {
  age: number;
  addFn: (val: number) => void;
  showFn: (val:string) => void
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
    this.setState({
      age: this.state.age + 1,
    }, () =>{this.props.addFn(this.state.age)});
    this.props.showFn('hahaha')
  };
  render(): React.ReactNode {
    return <button onClick={this.childAddAge}>点我</button>;
  }
}
export default Chlid;
