import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div> 
        <div className="current-operand">
          {formatOperand(currentOperand)}
        </div>
      </div>
      <button className="span-two">AC</button>
      <button >DEL</button>
      <div className="buttons">
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >+</button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button >-</button>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button >*</button>
        <button >0</button>
        <button >=</button>
        <button >/</button>
      </div>
    </div>
  );
}

export default Calculator;



