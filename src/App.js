import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBit from './Components/TopBit'
import ControlPanel from './Components/ControlPanel'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      rotate: false
    };
  }


  updateRotate = (rotate) => {
    this.setState((prevState) => 
      {
        return {
        rotate: !prevState.rotate
      };
    });
  }

  updateRotate2 = (rotate) => {
    this.setState((prevState) => 
      {
        return {
        rotate: !prevState.rotate
      };
    });
  }

  render() {
    return (
      <div className="App">
        <TopBit rotate={this.state.rotate} />
        <div className="App-intro">
          <ControlPanel updateRotate={this.updateRotate}
            rotate={this.state.rotate} />
        </div>
      </div>
    );
  }
}

export default App;
