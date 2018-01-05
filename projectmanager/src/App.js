import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import uuid from 'uuid';

class App extends Component {
  state = {
    projects : []
  }

  getProjects() {
    this.setState({
       projects : [
      {
        id: uuid.v4(),
        title : "Business Website",
        category : "UX Design"
      },
      {
        id: uuid.v4(),
        title : "Ecommerce Website",
        category : "UI Development"
      },
      {
        id: uuid.v4(),
        title : "Gaming Website",
        category : "HTML5 Development"
      }
    ]
    })
  }

  componentWillMount() {
    this.getProjects();
  }
  handleStateChange(newproj) {
    console.log(newproj);
    let newState = this.state.projects;
    newState.push(newproj);
    this.setState(newState);
  }
  handleDelFinally(id) {
    console.log('jfgfgghvv', id);
    let newState = this.state.projects;
    let indextodel = newState.findIndex(x => x.id == id);
    newState.splice(indextodel, 1);
    this.setState(newState);
  }
  // There should be only once parent div below such as <div className="App">. all other elements should go inside it.
  render() {
    return (
      <div className="App" style={{display:'flex', justifyContent: 'space-between'}}>
       <AddProject addProject={this.handleStateChange.bind(this)}/>
        <Projects projects={this.state.projects} ondel={this.handleDelFinally.bind(this)}/>
      </div>
    );
  }


}

export default App;
