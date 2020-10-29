import React from 'react';
import './App.css';
import { MainCode } from './MainCode';
import { Console } from './Console';

function App() {
  return (
    <div className="App">
      <div className="column">
        <MainCode />
        <Console />
      </div>
    </div>
  );
}

export default App;
