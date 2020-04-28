import React, { Component } from 'react';

import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import Skills from './pages/Skills';

import NavigationControl from './components/NavigationControl'

class App extends Component {
  render() {
    return (

      <div className="App">
        <header>
          <NavigationControl/>
        </header>
        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <footer>
          <Footer/>
        </footer>
      </div>

    );
  }
}

export default App;
