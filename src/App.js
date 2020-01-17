import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import Fridge from './Components/Fridge';
import Recipebook from './Components/Recipebook';
import axios from 'axios';

class App extends Component {

  addItem(body){
    axios.post('/api/items', body).then(res => {
    }).catch(err => {
      console.log(err)
    })
  }

  

  render(){
    return (
      <div>
        <Header />
        <div className='container'>
          <Fridge 
            addItemFn={this.addItem}
            />
          <Recipebook />
        </div>
      </div>
    );
  }
}

export default App;
