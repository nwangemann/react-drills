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
      <Picture url={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg?resize=980:*'} />
    </div>
  );
  }
}

export default App;
