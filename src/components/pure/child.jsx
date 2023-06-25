import { Alert } from 'bootstrap';
import React from 'react';

const child = ({ name }) => {
  function pressButton() {
    alert(`Default text`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  return (
    <div>
      <p onMouseOver={() => console.log('On mouse over')}>Child Component</p>
      <button onClick={() => console.log('Pressed button 1')}>Button 1</button>
      <button onClick={pressButton}>Button 2</button>
      <button onClick={pressButtonParams('Hola')}>Button 3</button>
    </div>
  );
};

export default child;
