import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import './App.css';

const App = () => {
  return(
    <div className="App">
      <h1>HOOKS</h1>
      <UseState />
      <UseEffect />
    </div>
  );
}

export default App;
