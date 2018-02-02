import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Names from './components/Names'

class App extends Component {
  state = {
    users : []
  };

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then(users => {
        console.table(users);
        
        this.setState({
          users : users
        })
      })
  }
  render() {
    let liusers = this.state.users.map(user => {
          return <li>{user.name}</li>
        })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Ref : https://daveceddia.com/create-react-app-express-backend/</h2>
        <ul>
          <li>npm install -g express-generator</li>
          <li>express react-backend</li>
          <li>edit routes.js</li>
          <li>> set PORT=3001 && npm start (coz by default react app & express app starts in 3000..so v need a diff port for backend call)</li>
          <li>Another CMD and cd..</li>
          <li>create-react-app react-frontend</li>
          <li>Add proxy key in package.json</li>
          <li>code in react to call backend api</li>

        </ul>
        <div className="wrapper">
          <Names users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
