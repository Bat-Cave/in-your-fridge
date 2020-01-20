import React, { Component } from 'react'

class Item extends Component{
  constructor(props){
    super(props)

    this.state = {
      toggleEdit: false,
      itemEdit: '',
      qtyEdit: null,
      unitEdit: '',
      catEdit: '',
      expEdit: ''
    }
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
    console.log(this.state[name]);
  }

  toggleEdit = () =>{
    this.setState({
      toggleEdit: !this.state.toggleEdit,
      itemEdit: this.props.item,
      qtyEdit: this.props.qty,
      unitEdit: this.props.unit,
      catEdit: this.props.cat,
      expEdit: this.props.exp})
  }

  updateItem(id){
    const { itemEdit, qtyEdit, unitEdit, catEdit, expEdit } = this.state
    this.props.updateItemFn(id, {itemEdit, qtyEdit, unitEdit, catEdit, expEdit});
    this.toggleEdit();
  }

  deleteItem = (id) => {
    this.props.deleteItemFn(id)
  }

  render(){
    return(
      <div className='list-item'>
        {this.state.toggleEdit ? 
          <input
            id='item-c' 
            name='itemEdit'
            type='text' 
            value={this.state.itemEdit}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
            placeholder={this.props.item}/>
          : <p id='item-c'>{this.props.item}</p>}
        {this.state.toggleEdit ? 
          <input 
            id='qty-c' 
            name='qtyEdit' 
            type='number'
            value={this.state.qtyEdit}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
            placeholder={this.props.qty}/>
          : <p id='qty-c'>{this.props.qty}</p>}
        {this.state.toggleEdit ? 
          <select 
            id='unit-c' 
            name='unitEdit'
            value={this.state.unitEdit}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)}>
            <option>Units</option>
            <option value='oz'>Ounces</option>
            <option value='gal'>Gallons</option>
            <option value='p'>Pints</option>
            <option value='q'>Quarts</option>
            <option value='c'>Cups</option>
          </select>
          : <p id='unit-c'>{this.props.unit}</p>}
        {this.state.toggleEdit ? 
          <select 
            id='cat-c' 
            name='catEdit'
            value={this.state.catEdit}
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
          : <p id='cat-c'>{this.props.cat}</p>}
        {this.state.toggleEdit ? 
          <input 
            id='exp-c' 
            name='expEdit' 
            type='date'
            value={this.state.expEdit}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
            placeholder={this.props.exp}/>
          : <p id='exp-c'>{this.props.exp}</p>}
        {this.state.toggleEdit ? 
          <p id='buttons-c'>
            <button onClick={() => this.updateItem(this.props.id)}><i className="fas fa-check"></i></button>
            <button onClick={() => this.toggleEdit()}><i className="fas fa-times"></i></button>
        </p>
          : <p id='buttons-c'>
              <button onClick={() => this.toggleEdit()}><i className="fas fa-pencil-alt"></i></button>
              <button onClick={() => this.deleteItem(this.props.id)}><i className="fas fa-trash-alt"></i></button>
            </p>}
      </div>
    )
  }
}


export default Item
