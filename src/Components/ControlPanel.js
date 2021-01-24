import React, { Component, useState } from 'react';
import '../App.css';


function ControlPanel (props) {


    const [rotateButtonDisabled, setRotateButtonDisabled] = useState(false);

  const  disableRotateButton = (event) => {
      setRotateButtonDisabled(!rotateButtonDisabled);
    }

  const  updateRotateHandler = (event) => {
      props.updateRotate()
    }

  
    return (
      <div id='d1' className="App">
        <p id='p1' className="App-intro">
          <button id='disable' title="disable or enable" onClick={disableRotateButton}>
            {rotateButtonDisabled ? 'Enable' : 'Disable'}
          </button>
          {'   '}
          <button id='rotate' title="rotate" disabled={rotateButtonDisabled}
            onClick={updateRotateHandler}>
          {props.rotate ? 'Stop' : 'Rotate'}
          </button>
        </p>
      </div>
    );  
}

export default ControlPanel;
