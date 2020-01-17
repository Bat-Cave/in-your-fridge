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
          </p>
        </div>
        {this.props.items.map((item, i) => {
          return(
            <Item 
              key={i}
              id={i}
              item={item.item}
              qty={item.qty}
              unit={item.unit}
              exp={item.exp}
              updateItemFn={this.props.updateItemFn}
              deleteItemFn={this.props.deleteItemFn}
            />
          )
        })}
      </div>
    )
  }
}


export default Itemlist