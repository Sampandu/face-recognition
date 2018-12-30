import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageURLForm from './components/ImageURLForm/ImageURLForm'
import FaceRecognitionBox from './components/FaceRecognitionBox/FaceRecognitionBox'
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
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.COLOR_MODEL,
      'https://samples.clarifai.com/face-det.jpg'
      )
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
        <FaceRecognitionBox imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
