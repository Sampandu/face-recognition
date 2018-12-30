import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
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

const app = new Clarifai.App({
  apiKey: '1499a6c857804419a72125229b319665'
 });


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  onInputChange(event) {
    console.log(event.target.value)
  }

  onButtonSubmit() {
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
      .then(
        function(response) {
          console.log(response)
      },
        function(err) {
        // there was an error
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params = {particlesConfig}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageURLForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        { /*<faceRecognitionBox /> */}
      </div>
    );
  }
}

export default App;
