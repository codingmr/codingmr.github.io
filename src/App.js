import React, { Component } from 'react';
import logo from './media/logo.svg';
import './App.css';

import { Button } from 'reactstrap';

import Navigationbar from './components/Navigationbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

import Section from './components/Section';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <Navigationbar />
        </header>
        <Section />
        <Landing/>
        <About/>
        <Projects/>
      </div>
      
    );
  }
}

export default App;
