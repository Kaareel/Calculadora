import React from 'react';
import './index.css'
function Button(params) {
    const {text, clase, handleClick} = params;
    return <button className={clase} onClick={handleClick}>{text}</button>
}
export default Button;