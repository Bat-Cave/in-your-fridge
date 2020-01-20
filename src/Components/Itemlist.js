import React from 'react'
import Item from './Item'

function Itemlist(props){

    return(
      <div className='table-container'>
        <div className='fridge-header'>
          <p id='item-c'>Item</p>
          <p id='qty-c'>Qty.</p>
          <p id='unit-c'>Units</p>
          <p id='cat-c'>Category</p>
          <p id='exp-c'>Exp. Date</p>
          <p id='buttons-c'>
          </p>
        </div>
        <div className='list-container'>
          {props.items.map((item, i) => {
            return(
              <Item 
                key={i}
                id={i}
                item={item.item}
                qty={item.qty}
                unit={item.unit}
                cat={item.cat}
                exp={item.exp}
                updateItemFn={props.updateItemFn}
                deleteItemFn={props.deleteItemFn}
              />
            )
          })}
        </div>
        <div className='fridge-footer'>
          <input 
            type='search'
            name='search'
            className='fridge-search'
            placeholder='Search the fridge...'
            autoComplete='off'
            onChange={(e) => props.handleInputFn( e.target.name, e.target.value)}
            />
            <button onClick={props.searchItemFn}><i className="fas fa-search"></i></button>
      </div>
    </div>
    )
  }


export default Itemlist