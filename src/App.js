import React, { Component } from 'react';
import Container from "./Container/Container";
import Photos from "./Photos/Photos";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
        <Photos />
      </div>
    );
  }

}

export default App;
