/*
export const Button = ({ label, label2="default", disabled=true, onButtonClick }) => {
    return (
        <div>
            {label2}
        <button disabled={disabled} onClick={onButtonClick} >{label}</button>
        </div>
    )
}
*/

import React from 'react'

export const Button = ({label, label2="test", disabled=true, onButtonClick, type}) => { 
  return (
    <div>
        <button disabled={disabled} onClick={onButtonClick}>{label}</button>
    </div>
  )
}

