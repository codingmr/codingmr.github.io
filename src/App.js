import React, { Component } from 'react';

import Navigationbar from './components/Navigationbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
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
        <Contact/>
        <footer>
          <Footer/>
        </footer>
      </div>

    );
  }
}

export default App;
