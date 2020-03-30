import React, { Component } from 'react';
//import './App.css';

import { Button } from 'reactstrap';

import Navigationbar from './components/Navigationbar';
import Landing from './pages/Landing';
import Aboutme from './pages/Aboutme';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <Navigationbar />
        </header>
        <Landing/>
        <Aboutme/>
      </div>

    );
  }
}

export default App;
