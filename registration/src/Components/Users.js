import React, { Component } from 'react';
// import './App.css';
import User from './User'

class Users extends Component {
  handleCli(usr) {
    console.log('2nd here ', this);
    this.props.handleCl(usr);
  }
  render() {
    let userslist;
    if (this.props.userslist) {
      userslist  = this.props.userslist.map((usr) => {
        return <User user={usr} clickli={this.handleCli.bind(this)}/>
      })
    }
    return (
      <div>
        <h4>Users List</h4>
        <ul className="users">
          {userslist}
        </ul>
      </div>
    );
  }
}

export default Users;
