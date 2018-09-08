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
        this.setState((prevState) => {
            return {
                rotateButtonDisabled: !prevState.rotateButtonDisabled
            }
        })
    }

    updateRotate = (event) => {
        this.props.updateRotate()
    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <button title="disable or enable" onClick={this.disableRotateButton}>
            {this.state.rotateButtonDisabled ? 'Enable' : 'Disable'}
          </button>
          {'   '}
          <button title="rotate" disabled={this.state.rotateButtonDisabled}
            onClick={this.updateRotate}>
          {this.props.rotate ? 'Stop' : 'Rotate'}
          </button>
        </p>
      </div>
    );
  }
}

export default ControlPanel;
