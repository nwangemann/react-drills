import React, {Component} from 'react';
import './App.css';
import ToDo from './ToDo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
      input: ''
    }
  }

  changeHandler = (value) => {
    this.setState({
      input: value
    })
  }
  
  addToList = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let mappedList = this.state.list.map((elem, index) => {
      return <ToDo key={index} task={elem} />
    })
  return (
    <div className="App">
       <div>
         <h1>To Do List:</h1>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.changeHandler(e.target.value)}
          />

          <button onClick={this.addToList}>Add</button>
        </div>

        <br />

        {this.state.list}
    </div>
  );
  }
}

export default App;
