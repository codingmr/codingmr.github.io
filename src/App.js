import React, { Component } from 'react';
//import './App.css';

import { Button } from 'reactstrap';

import Navigationbar from './components/Navigationbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <Navigationbar />
        </header>
        <Landing/>
        <About/>
        <Projects/>
      </div>

    );
  }
}

export default App;
