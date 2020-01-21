import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      response: ""
    };
  }

  update = val => {
    this.setState({
      response: val
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input
              onChange={e => {
                this.update(e.target.value);
              }}
            ></input>
            <div>
              <span>{this.state.response}</span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
