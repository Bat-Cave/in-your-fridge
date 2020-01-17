import React from 'react';
import Header from './Components/Header'
import './App.css';
import Fridge from './Components/Fridge';
import Recipebook from './Components/Recipebook';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Fridge />
        <Recipebook />
      </div>
    </div>
  );
}

export default App;
