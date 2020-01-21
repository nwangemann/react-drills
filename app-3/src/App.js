import React, {Component} from 'react';
import './App.css';
import { unstable_batchedUpdates } from 'react-dom';

class App extends Component {
  constructor(){
    super()

    this.state = {
      groceries: ['Bananas', 'Apples', 'Grapes', 'Oranges', 'Lemons', 'Limes', 'Celery', 'Bread', 'Bagels', 'Raisins'],
      filterTerm: '',
      filterArray: ['Bananas', 'Apples', 'Grapes', 'Oranges', 'Lemons', 'Limes']
    } 
  }


  update = (val) => {
    let filterArray = []
    for(let i = 0; i < this.state.groceries.length; i++){
      if ((this.state.groceries[i].toLowerCase()).includes(val.toLowerCase()) === true){
        filterArray.push(<li>{this.state.groceries[i]}</li>)
      }
    }
    this.setState({
      filterArray: filterArray
    })
  }


  render(){
      return (
    <div className="App">
      <input onChange={(e) => this.update(e.target.value)}></input>
      <span>{this.state.filterArray}</span>
    </div>
     );
  }
}

export default App;
