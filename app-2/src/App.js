import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      menu: ["Sushi", "Burritos", "Pizza", "Escargo", "Cannoli"]
    };
  }

  listMaker = () => {

  }

  render() {
    let menuMap = this.state.menu.map((elem) => {
      return <li>{elem}</li>;
    })
    return (
     <div className="App">
       <ol>{menuMap}</ol>
     </div>
    )
  }
}

export default App;
