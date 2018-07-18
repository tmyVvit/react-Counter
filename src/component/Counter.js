import React, {Component} from 'react'

export default class Counter extends React.Component {
    constructor(props){
      super(props);
      this.state = {count:0};
    }

    adder = ()=>{
      this.setState({
        count: this.state.count+1
      });
    }

    subtracter = ()=>{
      this.setState({
        count: this.state.count-1
      });
    }

    render() {
      return (
        <div>
          <button onClick={this.adder}>+</button>
          <button onClick={this.subtracter}>-</button>
        {this.state.count}
        </div>
      );
    }
  }