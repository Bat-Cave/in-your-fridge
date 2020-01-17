import React, { Component } from 'react';
import Itemlist from './Itemlist';
import Glance from './Glance';
import axios from 'axios';

class Fridge extends Component{
  constructor(props){
    super(props);

    this.state = {
      itemIn: '',
      qtyIn: null,
      unitIn: '',
      expIn: '',
      addError: '',
      error: 'none',
      search: '',
    }
  }

  componentDidMount(){
    this.updateFridge();
    this.setState({items: this.props.items})
  }

  updateFridge = () => {
    this.props.updateFridgeFn();
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
  }

  addItem = () => {
    const { itemIn, qtyIn, unitIn, expIn } = this.state;
    if( !itemIn || !qtyIn || !expIn){
      this.setState({error: 'error'})
      setTimeout(() => this.setState({error: 'none'}), 4000)
    } else {
      this.props.addItemFn({
        item: itemIn,
        qty: qtyIn,
        unit: unitIn,
        exp: expIn
      })
      this.updateFridge();
    }
  }

  updateItem = (id, body) => {
    axios.put(`/api/items/${id}`, body).then(res => {
    }).catch(err => console.log(err))
    this.updateFridge();
  }

  deleteItem = (id) => {
    axios.delete(`/api/items/${id}`).then(res => {
    }).catch(err => console.log(err))
    this.updateFridge();
  }

  searchFridge = () => {
    this.props.searchFridgeFn(this.state.search)
  }

  render(){
    return(
      <div className='card fridge'>
        <h2>Fridge</h2>
        <Itemlist 
          items={this.props.items}
          handleInputFn={this.handleInput}
          updateItemFn={this.updateItem}
          deleteItemFn={this.deleteItem}
          searchItemFn={this.searchFridge}
          />
        <div className='fridge-side'>
          <div className='add-item'>
            <h4>Add Item</h4>
            <input 
              name='itemIn' 
              type='text' 
              placeholder='Item' 
              onChange={(e) => this.handleInput(e.target.name, e.target.value)}
              />
            <div className='qty-unit-container'>
              <input 
                name='qtyIn' 
                type='number' 
                id='qty' 
                placeholder='Quantity'
                onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
              <select 
                name='unitIn' 
                value='Units'
                onChange={(e) => this.handleInput(e.target.name, e.target.value)}>
                <option>Units</option>
                <option value='tsp.'>Teaspoons</option>
                <option value='tbl.'>Tablespoons</option>
                <option value='fl oz'>Fluid Ounces</option>
                <option value='c'>Cups</option>
                <option value='p'>Pints</option>
                <option value='q'>Quarts</option>
                <option value='ml'>Milliliters</option>
                <option value='l'>Liters</option>
                <option value='gal'>Gallons</option>
              </select>
            </div>
            <input 
              name='expIn' 
              type='date'
              data-date-format="DD MMMM YYYY" 
              placeholder='Expiration Date'
              onChange={(e) => this.handleInput(e.target.name, e.target.value)}
              />
            <button onClick={this.addItem}>Add Item</button>
            <p className={this.state.error}>Please fill all input fields</p>
          </div>
          <Glance 
            items={this.props.items}
          />
        </div>
      </div>
    )
  }
}

export default Fridge

/* Food Categories 
Fruits
Vegetables
Dairy
Proteins
Grains
Beverages
Condiments
Snacks/Sweets



*/