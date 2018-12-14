import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import 'tachyons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        { /*<Logo />
        <imageURLForm />
        <faceRecognitionBox /> */}
      </div>
    );
  }
}

export default App;
