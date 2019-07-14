import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{process.env.REACT_APP_GREETING} person</p>
    </div>
  );
}

export default App;
