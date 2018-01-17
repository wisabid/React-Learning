import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/child';
import Parent from './components/parent';

class App extends Component {
  state = {
      title : "Im Alf Alvin Aka Alfie!",
      relation : "Dad",
      type : "Lovely"
  };
  changetitle(newtitle) {
    this.setState({
      title : newtitle,
      relation: "Pappa"
    })
  }
  render() {
    return (
      <div className="App">
        
        <Child title={this.state.title} changeTitle={this.changetitle.bind(this, 'Call me Alfie!')}/>
        <Parent relation={this.state.relation} typ={this.state.type} changeTitle={this.changetitle.bind(this, 'I love my pappa!')} title={this.state.title}/>
      </div>
    );
  }
}

export default App;
