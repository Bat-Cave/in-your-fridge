import React, { Component } from 'react'
import Item from './Item'

class Itemlist extends Component{
  render(){
    return(
      <div className='list-container'>
        <div id='title' className='list-item'>
          <p id='item-c'>Item</p>
          <p id='qty-c'>Qty.</p>
          <p id='unit-c'>Units</p>
          <p id='exp-c'>Exp. Date</p>
          <p id='buttons-c'>
            <button>E</button>
            <button>X</button>
          </p>
        </div>
        {this.props.items.map((item, i) => {
          return(
            <Item 
              id={item.id}
              item={item.item}
              qty={item.qty}
              unit={item.unit}
              exp={item.exp}
            />
          )
        })}
      </div>
    )
  }
}


export default Itemlist