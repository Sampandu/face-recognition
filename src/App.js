import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageURLForm from './components/ImageURLForm/ImageURLForm'
import './App.css';
import 'tachyons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageURLForm />
        { /*<faceRecognitionBox /> */}
      </div>
    );
  }
}

export default App;
