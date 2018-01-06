import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegForm from './Components/RegForm'
import Users from './Components/Users'
import $ from 'jquery'

class App extends Component {
  
  state = {
     users : [
              {
                name : "Abid",
                email : "abidwsi@yahoo.com",
                gender : "Male"
              },
              {
                name : "Alfie",
                email : "abidwsi@yahoo.com",
                gender : "Male"
              },
              {
                name : "Shab",
                email : "abidwsi@yahoo.com",
                gender : "Female"
              }
            ],
      edituser : [{
                name : "",
                email : "",
                gender : ""
              }],
      mode : ['Submit']
  }
  getUsers() {
    let users;
    let newState = this.state.users,
      that = this;
    $.getJSON('http://www.json-generator.com/api/json/get/bUceHkIqGa?indent=2').then(function(resp) {
        console.log(resp);
        debugger;
        
        users = resp.map((item)=> {
          let nw = {name : item.name, email : item.email, gender : item.gender};
          newState.push(nw);
          return nw;
        })
        console.log('ABID', users);
        
        that.setState(newState);
    }) 
    
    
    }
  
  componentWillMount(){
      this.getUsers(); 

  }
  handleadduser(newuser) {
    let newState = this.state.users;
    newState.push(newuser);
    this.setState(newState);
  }
  handleliClick(usr) {
    console.log('3rd ehre', usr);
    let newState = this.state.edituser;
    newState.push(usr)
    this.setState(newState);

    let newMode = this.state.mode;
    newMode.splice(0,1);
    newMode.push('Edit');
    this.setState(newMode);
    
  }
  handleeditUser() {
    console.log('reached here');
  }
  render() {
    console.log('STATE', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Registration Form</h1>
        </header>
        <div className="App-intro">
          <RegForm adduser={this.handleadduser.bind(this)} editUser={this.state.edituser} addedit={this.state.mode[0]}/>
          
          <Users userslist={this.state.users} handleCl={this.handleliClick.bind(this)}/>
        </div>

      </div>
    );
  }
}

export default App;
