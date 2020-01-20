import React from 'react'

const Glance = (props) => {
  return(
    <div className='glance'>
      <div className='glance-r'>
        <span className='label'>Items in Fridge:</span>
        <p>{props.items.length}</p>
      </div>
      <div className='glance-r'>
        <span className='label'>Fruits:</span>
        <p>{props.fruits}</p>
      </div>
      <div className='glance-r'>
        <span className='label'>Vegetables:</span>
        <p>{props.veg}</p>
      </div>
      <div className='glance-r'>
        <span className='label'>Dairy:</span>
        <p>{props.dairy}</p>
      </div>
    </div>
  )
}

export default Glance