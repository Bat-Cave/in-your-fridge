import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import Fridge from './Components/Fridge';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: [],
      fruits: 0,
      vegetables: 0,
      dairy: 0
    }

    this.addItem = this.addItem.bind(this);
  }

  countCat = () => {
    this.state.items.forEach((item, i) => {
      if(this.state.items[i].cat === 'Fruit'){
        this.setState({fruits: this.state.fruits + 1})
        console.log(this.state.items[i].cat);
        console.log(this.state.fruits);
      }else if(this.state.items[i].cat === 'Vegetable'){
        this.setState({vegetables: this.state.vegetables + 1})
        console.log(this.state.items[i].cat);
        console.log(this.state.vegetables);
      }else if(this.state.items[i].cat === 'Dairy'){
        this.setState({dairy: this.state.dairy + 1})
        console.log(this.state.items[i].cat);
        console.log(this.state.dairy);
      }
    })
  }

  updateFridge = () => {
    axios.get('/api/items')
    .then(res => {
      this.setState({items: res.data});
    })
    .catch(err => console.log(err));
    this.countCat();
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
        <Header />
        <div className='container'>
          <Fridge 
            addItemFn={this.addItem}
            updateFridgeFn={this.updateFridge}
            searchFridgeFn={this.searchFridge}
            items={this.state.items}
            />
        </div>
      </div>
    );
  }
}

export default App;