import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Child from './components/Child'

class App extends Component {

  componentWillMount() {
    console.log('%c Im componentWillMount ! Set your initial state here or use this lifecycle hook to set some attrib or properties before rendering component. eg : setting window.innerWidth based on resolution', 'color:orange;font-weight:bold;');
  }
  
  constructor() {
    super();
    console.log('%cInitial State Already Set before calling constructor Mr. '+this.state.name, 'color:red;font-weight:bold;');

    console.log('%cIm constructor!', 'color : green; font-weight:bold');
    
    
  }

  //console.log('Gonna Set initial State !');
  state = {
    name : 'Alfie',
    counter : 0
  }

  componentDidMount() {
    console.log('%cIm componentDidMount !', 'color:indigo;font-weight:bold;')
  }

  componentWillUnmount() {
    console.log('%cIm componentWillUnmount ! Im gonna die!', 'color:black;font-weight:bold;')
  }

  changeName() {
    if (this.state.counter) {
      this.setState({
        name : "A*s**e!",
        counter : 0
      })
    } 
    else {
        this.setState({
          name : "Abid Shamim PM",
          counter : 1
        })
    }
    
  }
  
  render() {
    if (this.state.name === "A*s**e!") {
      return (<div><h1 style={{color:'red', display : 'flex', justifyContent : 'center'}}>Sorry Alfie! Im not calling your child component!</h1></div>)
    }
    else {
      console.log('%cIm render ! Never set state in here as that will cause re rendering. Why would u wanna rerender wen u r already on render method? But instead use html event (button click) to setState!', 'color:purple;font-weight:bold;');
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            
           </p>
           <Child name={this.state.name} counter={this.state.counter}/>
           <button onClick={this.changeName.bind(this)}>Change Name </button>
        </div>
      );
  }
  }
}

export default App;
