import React from 'react'

function Header(props){
  return(
    <header>
      <span>In <span className='white'>Your</span> Fridge</span>
      <nav>
        <a href='dashboard.com'>Dashboard</a>
        <a href='dashboard.com'>Recipes</a>
        <a href='dashboard.com'>Account</a>
        <a href='dashboard.com'>Settings</a>
      </nav>
    </header>
  )
}

export default Header