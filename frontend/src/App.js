import React from 'react';
import Routes from './Routes';

import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
