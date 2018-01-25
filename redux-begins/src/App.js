import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import redx from './Components/client';
import redx2 from './Components/client2';
import combRed from './Components/combinedreducers';
import mdw from './Components/middleware';
import logmdw from './Components/loggermidware';
import thunk from './Components/thunkaxios';
import prmid from './Components/promisemiddleware';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Watch the Console Window Please!</h1>
      </div>
    );
  }
}

export default App;
