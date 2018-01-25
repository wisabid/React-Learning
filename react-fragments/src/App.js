import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const Statelesscomp = (props) => {
  return (
    <div title="Unnecessary div for wrapping! React Error Otherwise!">
      <div>Hi Alfie! You are 
        {
            /* The following will not work! Use ternary oper instead!
            if (props.greeting == "Mr. Alf Alvin PM without Fragment") {
              hurray!
            }*/
            props.greeting == "Mr. Alf Alvin PM without Fragment"
            ? `Hurray! ${props.greeting}`
            : `Sad`
        }
      </div>
      <div>Love you to the moon!</div>
    </div>
  );
}

const FragmentSoln = (props) => {
  return (
    <Fragment>
      <div>Alf! Fragment to your rescue!</div>
      <div>Now look at the debugger. There isnt any Unnecessary wrapper element rendered</div>
      {
        props.greeting === "Mr. Alf Alvin PM, this html tag is rendered using Fragment inside jsx!"
        ?<Fragment>&lt;div&gt;{props.greeting}&lt;/div&gt;</Fragment>
        :props.greeting
      }
    </Fragment>
  );
}

const FragmentSoln2 = () => {
  //this isnt working somehow
  /*return (
    <>
      <div>Empty Fragment to your rescue!</div>
      <div>Now look at the debugger. There isnt any Unnecessary wrapper element rendered</div>
    </>
  );*/
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Statelesscomp greeting="Mr. Alf Alvin PM without Fragment"/><br/><br/>
        <FragmentSoln greeting="Mr. Alf Alvin PM, this html tag is rendered using Fragment inside jsx!" /><br/><br/>
      </div>
    );
  }
}

export default App;
