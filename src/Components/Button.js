import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('Click me!');

  
  const handleClick = () => {
    setText('Button clicked!');
  };

  return (
    <div
      style={{
        backgroundColor: 'gray',
        width:'100px',
        height:'100px',
        margin:'10px',
        color: 'white',
        font:'Arial',
        borderRadius:'5px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      onMouseOver={
        backgroundColor:'white',
        color:'black'
      }
    >
      {text}
    </div>
  );
};

export default Button;
