import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'
import Counters from './component/CouterGroup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Counters number={2} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
}



export default App;
