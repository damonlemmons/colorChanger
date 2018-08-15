import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./box";

class App extends Component {
  constructor(props){
    super(props)(
      this.state = {
        count: 0
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Text Color Changer</h1>
          <p>Click the box to change the color of the text!
          </p>
        </header>
        <Box />
      </div>
    );
  }
}

export default App;
