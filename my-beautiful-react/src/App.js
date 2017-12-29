import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './users/Users';
import Profiles from './profiles/Profiles';

// function actAsComponent() {
//   return <p>Love you to the moon and back <p>;
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Beautiful React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div name={1+1}>Hello Abid</div>
        <div id="name">Hello Abid Shamim</div>
        <div className="name">Hello Abid Shamim PM</div>
        <div htmlFor="Abid">Hello Alfie
          
        </div>
        <hr />
        <Users/>
        <Profiles title="I'm a Profile Class Component"/>
      </div>

    );
  }
}

export default App;
