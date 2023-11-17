import React, { useState } from 'react';

const Button = ({children}) => {
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');
  const hover = () => {
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
        height:'100px',
        margin:'10px',
        font:'Arial',
        borderRadius:'5px',
        cursor: 'pointer',
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
