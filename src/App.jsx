import React from 'react';
import './App.css';
import Calculator from './Calculator';
import InteractiveBackground from './InteractiveBackground';

function App() {
  return (
    <>
      <InteractiveBackground />  
      <h1>Calculator with 
          <span className='cool'>
            <span className='cool-text'> Interactive background</span>
          </span>
      </h1>
      <Calculator />
    </>
  );
}

export default App;

