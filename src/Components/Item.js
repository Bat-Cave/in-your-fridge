import React, { Component } from 'react'

class Item extends Component{
  render(){
    return(
      <div className='list-container'>
        <p id='item-c'>{this.props.item}</p>
        <p id='qty-c'>{this.props.qty}</p>
        <p id='unit-c'>{this.props.unit}</p>
        <p id='exp-c'>{this.props.exp}</p>
        <p id='buttons-c'>
          <button>E</button>
          <button>X</button>
        </p>
      </div>
    )
  }
}


export default Item