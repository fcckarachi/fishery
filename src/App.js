import React, { Component } from 'react';
import Inventory from './components/Inventory';
import Order from './components/Order';
import List from './components/List';

import './css/bootstrap.min.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      fishes : []
    };
  }

  addFish(fish){
      let fishes;
      fishes = this.state.fishes;
      fishes.push(fish);
      this.setState({fishes : fishes});
  }

  render() {
    let fishes,addFish;
    fishes = this.state.fishes;
    addFish = this.addFish.bind(this);

    return (
      <div className="container">
        <div className="row">

          <Inventory addFish={addFish} />          
          <Order fishes={fishes} />          
          <List fishes={fishes} />          

        </div>
      </div>
    );
  }
}

export default App;
