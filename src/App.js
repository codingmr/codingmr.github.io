import React, { Component } from 'react';

import Navigationbar from './components/Navigationbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import ScrollButton from './components/ScrollButton'

import NavigationControl from './components/NavigationControl'

class App extends Component {
  render() {
    return (

      <div className="App">
        <NavigationControl/>
        <Landing/>
        <About/>
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
