import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: ''
    }
  }

  componentDidMount(){
    axios.get("https://swapi.co/api/people/11").then(res => {
      this.setState({
        name: res.data.name,
        height: res.data.height,
        mass: res.data.mass,
        hair_color: res.data.hair_color,
        skin_color: res.data.skin_color,
        eye_color: res.data.eye_color
      })
    })
  }


  render(){
  return (
    <div className="App">
      <p>{this.state.name}</p>
      <p>{this.state.height}</p>
      <p>{this.state.mass}</p>
      <p>{this.state.hair_color}</p>
      <p>{this.state.skin_color}</p>
      <p>{this.state.eye_color}</p>

    </div>
  );
  }
}

export default App;
