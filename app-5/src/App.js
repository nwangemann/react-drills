import React, {Component} from 'react';
import Picture from './Picture'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {

    }
  }
  render(){
  return (
    <div className="App">
      <Picture reference={'https://via.placeholder.com/750'} />
    </div>
  );
  }
}

export default App;
