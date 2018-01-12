import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { add, substract, singleInstanceShared } from './modules/libA'; //importing named functions
import * as libAA from './modules/libAA';
import mult, { x } from './modules/libB'; //importing default module & a named module
import Car from './modules/libC'; //improting a default class

class App extends Component {
  constructor() {
    super();
    this.newCar = new Car('Speedy');

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ES6/ES2015 Modules</h1>
        </header>
        { add(1, 5) } <br/>
        { substract(100, 5) } 
        <hr/>
        { libAA.num } <br/>
        { libAA.incrementnum() } <br/>
        Now { libAA.num } <br/>
        Single instance is shared. From libA module : {singleInstanceShared()} <br/>
        { mult(3, 100) } <br/>
        { x } <br/>
        { this.newCar.name }
      </div>
    );
  }
}

export default App;
