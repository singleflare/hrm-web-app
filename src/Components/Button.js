import React, { useState } from 'react';

const Button = ({children}) => {
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');
  const hover=()=>{
    setBgColor('gray');
    setTextColor('black');
  }
  const leave=()=>{
    setBgColor('black');
    setTextColor('white');
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        font:'Arial',
        fontSize:'18pt',
        padding:'10px',
        transitionDuration:'0.1s'
      }}
      onMouseOver={hover}
      onMouseLeave={leave}
    >
    {children}
    </div>
  );
};

export default Button;
