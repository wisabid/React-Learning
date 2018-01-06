import React, { Component } from 'react';
// import './App.css';

class User extends Component {
  handleClick() {
    console.log('1st here', this);
    this.props.clickli(this.props.user);
  }
  render() {
    
    return (
      <li onClick={this.handleClick.bind(this)}>{this.props.user.name} | {this.props.user.email}</li>
    );
  }
}

export default User;
