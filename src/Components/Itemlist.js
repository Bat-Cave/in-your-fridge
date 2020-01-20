import React from 'react'
import Item from './Item'

function Itemlist(props){

    return(
      <div className='table-container'>
        <div className='fridge-header'>
          <p className='item-c'>Item</p>
          <p className='qty-c'>Qty.</p>
          <p className='unit-c'>Units</p>
          <p className='cat-c'>Category</p>
          <p className='exp-c'>Exp. Date</p>
          <p className='buttons-c'>
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