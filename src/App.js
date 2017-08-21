import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import {Router, Route} from 'react-router'

class App extends Component {
  render() {
    return (
      //<Login/>
      <Router>
        <Route path='/' component={Login}/>
      </Router>
    );
  }
}

export default App;
