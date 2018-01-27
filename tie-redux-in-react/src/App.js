import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'; //The first n intial step of tieing up redux in react.. : Add a redux react Provider component connecting store
import store from './store'; //Importing store for injecting to Provider


import Layout from './Components/Layout'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="wrapper">
          <Provider store={store}>
            <Layout />
          </Provider>
          <Provider store={store}>
            <Footer />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
