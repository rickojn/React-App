import React, { Component } from 'react';
import '../App.css';


class ControlPanel extends Component {

    constructor(props){
        super(props)
        this.state= {
            rotateButtonDisabled : false
        }
    }


    disableRotateButton = (event) => {
        this.setState((state) => {
            return {
                rotateButtonDisabled: !state.rotateButtonDisabled
            }
        })
    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <button title="disable or enable" onClick={this.disableRotateButton}>{this.state.rotateButtonDisabled ? 'Enable' : 'Disable'}</button>{'   '}
          <button title="rotate" disabled={this.state.rotateButtonDisabled}>Rotate</button>
        </p>
      </div>
    );
  }
}

export default ControlPanel;
