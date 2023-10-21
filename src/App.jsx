import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <>
      <h1>Calculator with 
          <span className='cool'>
            <span className='cool-text'> cool css effects</span>
          </span>
        </h1>
      <Calculator />
    </>
  );
}

export default App;

