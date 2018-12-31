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
      imageUrl: '',
      faceBox: {}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceLocation = (data) => {
    const faceCoordinate = data.outputs[0].data.regions[0].region_info.bounding_box
    const inputImage = document.getElementById('inputImage')
    const width = Number(inputImage.width)
    const height = Number(inputImage.height)
    return {
      leftCol: faceCoordinate.left_col * width,
      topRow: faceCoordinate.top_row * height,
      rightCol: (1 - faceCoordinate.right_col) * width,
      bottomRow: (1 - faceCoordinate.bottom_row) * height
    }
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
      )
      .then(response => this.setState({faceBox: this.calculateFaceLocation(response)}))
      .catch(err => console.err)
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
        <FaceRecognitionBox imageUrl={this.state.imageUrl} faceBox={this.state.faceBox} />
      </div>
    );
  }
}

export default App;
