import React, { useState } from 'react';

const Button = ({children}) => {
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');
  const hover=()=>{
    setBgColor('white');
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
        width:'100px',
        margin:'5px',
        font:'Arial',
        fontSize:'15pt',
        borderRadius:'5px',
        textAlign:'center',
        verticalAlign:'middle'
      }}
      onMouseOver={hover}
      onMouseLeave={leave}
    >
    {children}
    </div>
  );
};

export default Button;
