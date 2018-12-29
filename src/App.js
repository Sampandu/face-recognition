import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageURLForm from './components/ImageURLForm/ImageURLForm'
import './App.css';
import 'tachyons'

const particlesConfig = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params = {particlesConfig}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageURLForm />
        { /*<faceRecognitionBox /> */}
      </div>
    );
  }
}

export default App;
