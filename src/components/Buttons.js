import React from 'react'

export const Buttons = ({onClickHandler,value,title}) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
}
