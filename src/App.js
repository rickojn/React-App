import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBit from './Components/TopBit'
import ControlPanel from './Components/ControlPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src='Jenn.jpg' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <TopBit rotate={false} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.        
          <ControlPanel />
        </p>
      </div>
    );
  }
}

export default App;
