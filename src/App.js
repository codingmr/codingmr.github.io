import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';

import Navigationbar from './components/Navigationbar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigationbar />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button onClick={this.increment} >Click me</Button>
          {this.state.count};
        </p>
      </div>
    );
  }
}

export default App;
