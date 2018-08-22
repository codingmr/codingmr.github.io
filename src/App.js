import React, { Component } from 'react';
import logo from './media/logo.svg';
import './App.css';

import { Button } from 'reactstrap';

import Navigationbar from './components/Navigationbar';
import Landing from './components/Landing';
import About from './components/About';

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
        </header>
        <Landing />
        <About />
        { // <Landing />
          // <About />
          // <Projects />
          // <Footer />
        } 
        <p className="App-intro">
          <Button onClick={this.increment} >Click me</Button>
          {this.state.count};
        </p>
      </div>
    );
  }
}

export default App;
