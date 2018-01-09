import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name : "Abid Shamim"
  };
  changeName = (newName) => {
    this.setState({
      name : newName
    })
  }
  handlechangeVal = (event) => {
    this.setState({
      name : event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={() => this.changeName("Alfie")}>Change Name using anonymous function</button>
<button onClick={this.changeName.bind(this, "Alf Alvin")}>Change Name using bind function</button><br /><br /><br />
<input type="text" onChange={this.handlechangeVal} value={this.state.name} /> value attrib should always be accompanied with onChange attrib if interpolation is used in value attrib
          <br /><br />
          Hello {this.state.name}
        </p>
      </div>
    );
  }
}

export default App;
