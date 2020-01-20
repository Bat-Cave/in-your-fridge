import React from 'react'

const Glance = (props) => {
  console.log(props.items)
  return(
    <div className='glance'>
      <div className='glance-r'>
        <span className='label'>Items in Fridge:</span>
        <p>{props.items.length}</p>
      </div>
      <div className='glance-r'>
        <span className='label'>Fruits:</span>
        <p>{}</p>
      </div>
    </div>
  )
}

export default Glance