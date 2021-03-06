import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageURLForm from './components/ImageURLForm/ImageURLForm';
import FaceRecognitionBox from './components/FaceRecognitionBox/FaceRecognitionBox';
import './App.css';
import 'tachyons';

const particlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
};

const initialState = {
  input: '',
  imageUrl: '',
  faceBoxes: [],
  route: 'home',
  isSignin: false,
  user: {
    id: '',
    name: '',
    email: '',
    submition: 0,
    join: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  //calculate the position of the face box in the image
  calculateFaceLocation = data => {
    const faceDetection = data.outputs[0].data.regions;
    const inputImage = document.getElementById('inputImage');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);

    if (faceDetection.length === 0) {
      return;
    } else {
      const detectedFaces = [];
      for (let i = 0; i < faceDetection.length; i++) {
        const faceCoordinate = faceDetection[i].region_info.bounding_box;
        const faceBox = {
          leftCol: faceCoordinate.left_col * width,
          topRow: faceCoordinate.top_row * height,
          rightCol: (1 - faceCoordinate.right_col) * width,
          bottomRow: (1 - faceCoordinate.bottom_row) * height,
        };
        detectedFaces.push(faceBox);
      }
      return detectedFaces;
    }
  };

  displayFaceBoxes = boxes => {
    this.setState({ faceBoxes: boxes });
  };

  //hit the 'imageurl' api in the backend
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://still-forest-54612.herokuapp.com/imageurl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://still-forest-54612.herokuapp.com/image', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then(response => response.json())
            .then(submition =>
              this.setState({
                user: Object.assign(this.state.user, { submition }),
              })
            )
            .catch(err => console.log(err));
        }
        this.displayFaceBoxes(this.calculateFaceLocation(response));
      })
      .catch(err => console.err);
  };

  //redirect to different page in terms of user's status
  onRouteChange = route => {
    if (route === 'home') {
      this.setState({ isSignin: true });
    } else if (route === 'signin') {
      this.setState(initialState);
    }
    this.setState({ route });
  };

  loadUser = data => {
    this.setState({
      user: Object.assign(this.state.user, data),
    });
  };

  render() {
    const { route, isSignin, user } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfig} />
        <Navigation onRouteChange={this.onRouteChange} isSignin={isSignin} />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank user={user} />
            <ImageURLForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognitionBox
              imageUrl={this.state.imageUrl}
              faceBoxes={this.state.faceBoxes}
            />
          </div>
        ) : route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
