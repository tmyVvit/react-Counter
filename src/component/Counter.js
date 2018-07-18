import React, {Component} from 'C:/Users/tengte/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'

export default class Counter extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count:0,
      };
    }

    

    adder = ()=>{
      this.setState({
        count: this.state.count+1
      });
      this.props.update(1);
    }

    subtracter = ()=>{
      this.setState({
        count: this.state.count-1
      });
      this.props.update(2);
    }

    render() {
      return (
        <div>
            <button onClick={this.adder}>+</button>
            <button onClick={this.subtracter}>-</button>
            <span style={{margin:20}}>{this.state.count}</span>
        </div>
      );
    }
  }