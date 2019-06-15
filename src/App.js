import React from 'react';
import './App.css';
import {Board} from './scramble-board'

function App() {
  return (
    <div className="App" style={{width: '90vw', height: '90vw', marginLeft: 'auto', marginRight: 'auto'}}>
      <Board/>
    </div>
  );
}

export default App;
