import React from 'react';
import './index.css'
function Buton(params) {
    const {text, class, handleClick} = params;
    return <button className={class} onClick={handleClick}>{text}</button>
}
export default Buton;