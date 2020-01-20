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
      itemNames: [],
      recipes: [],
      fruits: 3,
      vegetables: 4,
      dairy: 4
    }

    this.addItem = this.addItem.bind(this);
  }

  updateFridge = () => {
    axios.get('/api/items')
    .then(res => {
      this.setState({items: res.data});
    })
    .catch(err => console.log(err));
    console.log(this.state.items)
  }

  updateRecipebook = () => {
    axios.get('/api/recipes')
    .then(res => {
      this.setState({recipes: res.data});
    })
    .catch(err => console.log(err));
  }

  addItem(body){
    axios.post('/api/items', body).then(res => {
      this.setState({items: res.data})
    }).catch(err => {
      console.log(err)
    })
    
    let fruitCount = this.state.fruits;
    let vegCount = this.state.vegetables;
    let dairyCount = this.state.dairy;
    if(body.cat === 'Fruit'){
      fruitCount = fruitCount + 1
    } else if (body.cat === 'Vegetable'){
      vegCount = vegCount + 1
    } else if (body.cat === 'Dairy'){
      dairyCount = dairyCount + 1
    }
    
    this.setState({fruits: fruitCount, vegetables: vegCount, dairy: dairyCount})
  }

  addRecipe(body){
    axios.post('/api/recipes', body).then(res => {
      this.setState({recipes: res.data})
    }).catch(err => {
      console.log(err)
    })
  }

  searchFridge = (text) => {
    axios.get(`/api/items/${text}`).then(res => {
      this.setState({items: res.data});
    }).catch(err => console.log(err));
  }

  findRecipe = () => {
    const { items } = this.state;
    const str = [];
    items.forEach((item, i) => {
      str.push(item.item.toLowerCase().split(' '))
    })
    this.setState({itemNames: str.toString()})
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
            findRecipeFn={this.findRecipe}
            items={this.state.items}
            fruits={this.state.fruits}
            veg={this.state.vegetables}
            dairy={this.state.dairy}
            />
          <Recipebook 
            recipes={this.state.recipes}
            items={this.state.itemNames}
            addRecipeFn={this.addRecipe}
            updateRecipebookFn={this.updateRecipebook}
            />
        </div>
      </div>
    );
  }
}

export default App;