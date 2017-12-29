import React, { Component } from 'react';
import User from './User'



class Users extends Component {
  state  = {
    users : [
      {name : "Alfie", age : 0.5},
      {name : "Alvin", age : 0.6},
      {name : "Alf", age : 0.7},
    ],
    title : "Dynamic Names & Ages",
    clicked : false,
    newusers : [
          {name : "Abi", age : 2.7},
          {name : "Shab", age : 3.9},
          {name : "AlfAlvin", age : 7.99}
        ]
  }

  makeMeOlder = () => {
    console.log('clicked');
    
    // this.state = {
    //   users : [
    //   {name : "Alfie", age : 0.7},
    //   {name : "Alvin", age : 0.9},
    //   {name : "Alf", age : 0.99}
    //   ]
    // } This is wrong

    if (!this.state.clicked) {
      this.setState({
        users : [
          {name : "Alfie", age : 0.7},
          {name : "Alvin", age : 0.9},
          {name : "Alf", age : 0.99}
        ],
        clicked : true        
      })
    }
    else {
      const newState = this.state.users.map((item) => {
        item.age+=0.22;
        return item;
      });
      this.setState({
        newState
      })
    }
    console.log(this.state.users); //this will not have the above change coz setState is async

  }

  render() {
    return (<div>
      <User age="20">John</User>
      <User age="30">Jack</User>
      <User age="40">Jill</User>
      <User age="50">Alfie</User>
      <h1>{this.state.title}</h1>
      <button onClick={this.makeMeOlder}>Make me Older Please</button>
      <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
      <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
      <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
      <h2>More Names</h2>
      {
        this.state.newusers.map((item) => {
          return <User age={item.age}>{item.name}</User>
        })
      }

    </div>)
  }
}

export default Users;
