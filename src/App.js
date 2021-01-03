import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBit from './Components/TopBit'
import ControlPanel from './Components/ControlPanel'
import { useState } from 'react';

function App() {

  const [rotate, setRotate] = useState(false);

  const updateRotate = () => {
    setRotate(!rotate);
  };



  return (
    <div id='d1' className="App">
      <TopBit rotate={rotate} />
      <div id='d2' className="App-intro">
        <ControlPanel updateRotate={updateRotate}
          rotate={rotate} />
      </div>
    </div>
  );

}

export default App;
