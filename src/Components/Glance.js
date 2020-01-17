import React from 'react'

const Glance = (props) => {
  return(
    <div className='glance'>
      <div className='glance-r'>
      </div>
      <div className='glance-r'>
        <span className='label'>Items in Fridge:</span>
        <p>{props.items.length}</p>
      </div>
    </div>
  )
}

export default Glance