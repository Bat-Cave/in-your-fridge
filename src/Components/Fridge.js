import React, { Component } from 'react';
import Itemlist from './Itemlist';
import Glance from './Glance';
import axios from 'axios';

class Fridge extends Component{
  constructor(props){
    super(props);

    this.state = {
      items: [],
      itemIn: '',
      qtyIn: null,
      unitIn: '',
      expIn: '',
      addError: '',
      error: 'none'
    }
  }

  componentDidMount(){
    this.updateFridge();
  }

  updateFridge = () => {
    axios.get('/api/items')
    .then(res => {
      this.setState({items: res.data});
    })
    .catch(err => console.log(err));
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
    console.log(this.state[name]);
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

  render(){
    return(
      <div className='card fridge'>
        <Itemlist 
          items={this.state.items}
          updateItemFn={this.updateItem}
          deleteItemFn={this.deleteItem}
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
                <option></option>
                <option value='oz'>Ounces</option>
                <option value='gal'>Gallons</option>
                <option value='p'>Pints</option>
                <option value='q'>Quarts</option>
                <option value='c'>Cups</option>
              </select>
            </div>
            <input 
              name='expIn' 
              type='date' 
              placeholder='Expiration Date'
              onChange={(e) => this.handleInput(e.target.name, e.target.value)}
              />
            <button onClick={this.addItem}>Add Item</button>
            <p className={this.state.error}>Please fill all input fields</p>
          </div>
          <Glance />
        </div>
      </div>
    )
  }
}

export default Fridge