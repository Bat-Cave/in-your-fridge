import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import Fridge from './Components/Fridge';
import Recipebook from './Components/Recipebook';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: [],
    }

    this.addItem = this.addItem.bind(this);
  }

  updateFridge = () => {
    axios.get('/api/items')
    .then(res => {
      this.setState({items: res.data});
    })
    .catch(err => console.log(err));
  }

  addItem(body){
    axios.post('/api/items', body).then(res => {
      this.setState({items: res.data})
    }).catch(err => {
      console.log(err)
    })
  }

  searchFridge = (text) => {
    axios.get(`/api/items/${text}`).then(res => {
      this.setState({items: res.data});
    }).catch(err => console.log(err));
    
  }

  render(){
    return (
      <div>
        <Header 
          items={this.state.items}
        />
        <div className='container'>
          <Fridge 
            addItemFn={this.addItem}
            updateFridgeFn={this.updateFridge}
            searchFridgeFn={this.searchFridge}
            items={this.state.items}
            />
          <Recipebook />
        </div>
      </div>
    );
  }
}

export default App;
