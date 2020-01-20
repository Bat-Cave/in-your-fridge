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
      catIn: '',
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
    this.props.findRecipeFn();
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
  }

  addItem = () => {
    const { itemIn, qtyIn, unitIn, catIn, expIn } = this.state;
    if( !itemIn || !qtyIn || !catIn || !expIn){
      this.setState({error: 'error'})
      setTimeout(() => this.setState({error: 'none'}), 4000)
    } else {
      const mmdd = expIn.split('').splice(5, 5).join('').replace('-', '/');
      const yyyy = expIn.split('').splice(0, 4).join('').replace('-', '/');
      this.props.addItemFn({
        item: itemIn,
        qty: qtyIn,
        unit: unitIn,
        cat: catIn,
        exp: `${mmdd}/${yyyy}`
      })
      this.updateFridge();
    }
  }

  updateItem = (id, body) => {
    axios.put(`/api/items/${id}`, body).then(res => {
    }).catch(err => console.log(err))
    this.props.updateFridgeFn();
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
      <div className='card'>
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
                <option value='lb'>Pounds</option>
              </select>
            </div>
            <div className='qty-unit-container'>
              <input 
                name='expIn' 
                type='date' 
                id='qty-date'
                onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                />
              <select 
                  name='catIn'
                  onChange={(e) => this.handleInput(e.target.name, e.target.value)}>
                  <option>Category</option>
                  <option value='Fruit'>Fruit</option>
                  <option value='Vegetable'>Vegetable</option>
                  <option value='Dairy'>Dairy</option>
                  <option value='Protein'>Protein</option>
                  <option value='Grain'>Grain</option>
                  <option value='Beverage'>Beverage</option>
                  <option value='Condiment'>Condiment</option>
                  <option value='Snack/Sweets'>Snack/Sweets</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
            <button onClick={this.addItem}>Add Item</button>
            <p className={this.state.error}>Please fill all input fields</p>
          </div>
          <Glance 
            items={this.props.items}
            fruits={this.props.fruits}
            veg={this.props.veg}
            dairy={this.props.dairy}
          />
        </div>
      </div>
    )
  }
}

export default Fridge

