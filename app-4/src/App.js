import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      displayuser: '',
      displaypass: ''
    }
  }

  updateLogin = (val) => {
    this.setState({
      username: val
    })
  }

  updatePassword = (val) => {
    this.setState({
      password: val
    })
  }

  display = () => {
    this.setState({
      displayuser: this.state.username,
      displaypass: this.state.password
    })
  }

  render(){
  return (
    <div className="App">
      <div>
      <input onChange={(e) => this.updateLogin(e.target.value)}></input>
      <input onChange={(e) => this.updatePassword(e.target.value)}></input>
      </div>
      <div>
      <button onClick={() => this.display()}>Submit!</button>
      </div>
      <div>
      <span>Username: {this.state.displayuser}   Password: {this.state.displaypass}</span>
      </div>
    </div>
  );
  }
}

export default App;
