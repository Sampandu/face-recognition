import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import './App.css';

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