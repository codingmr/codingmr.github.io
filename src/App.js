import React, { Component } from 'react';
//import './App.css';

import { Button } from 'reactstrap';

import Navigationbar from './components/Navigationbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './pages/Footer';


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
        <footer>
          <Footer/>
        </footer>
      </div>

    );
  }
}

export default App;
