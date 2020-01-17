import React, { Component } from 'react';
import Itemlist from './Itemlist';
import Glance from './Glance';

class Fridge extends Component{
  constructor(props){
    super(props);

    this.state = {
      items: [],
      id: 0,
      itemIn: '',
      qtyIn: null,
      unitIn: '',
      expIn: ''
    }
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
    console.log(this.state[name]);
  }

  addItem = () => {
    const { id, itemIn, qtyIn, unitIn, expIn} = this.state;
    let item = {
      id,
      item: itemIn,
      qty: qtyIn,
      unit: unitIn,
      exp: expIn
    }
    this.state.items.push(item);
    console.log(this.state.items)
  }

  render(){
    return(
      <div className='card fridge'>
        <Itemlist 
          items={this.state.items}
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
                <option>oz</option>
                <option>gal</option>
                <option>p</option>
                <option>q</option>
                <option>c</option>
              </select>
            </div>
            <input 
              name='expIn' 
              type='date' 
              placeholder='Expiration Date'
              onChange={(e) => this.handleInput(e.target.name, e.target.value)}
              />
            <button onClick={this.addItem}>Add Item</button>
          </div>
          <Glance />
        </div>
      </div>
    )
  }
}

export default Fridge