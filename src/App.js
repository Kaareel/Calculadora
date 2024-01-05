import react, { useState } from 'react';
import './App.css';
import Button from "./Componentes/Button/Button.js";
import { CgMathDivide } from "react-icons/cg";
import { TbMath } from "react-icons/tb";
import { LuDelete } from "react-icons/lu";


function App() {
  //const {data, setdata} = useState({ operacion:'', resultado:''});
  return (
    <main >
      <span className = "resultado" type = "text">50</span>
      <span className = "displey" type = "text">25 + 25</span>
      <Buton clase = "especial" text = "C"  handleClick = ""/>
      <Buton clase = "especial" text = "%" handleClick = ""/>
      <Buton clase = "especial" text = {<TbMath />} handleClick = ""/>
      <Buton clase = "operacion" text = {<CgMathDivide />} handleClick = ""/>
      <Buton clase = "numero" text = "7" handleClick = ""/>
      <Buton clase = "numero" text = "8" handleClick = ""/>
      <Buton clase = "numero" text = "9" handleClick = ""/>
      <Buton clase = "operacion" text = "x" handleClick = ""/>
      <Buton clase = "numero" text = "4" handleClick = ""/>
      <Buton clase = "numero" text = "5" handleClick = ""/>
      <Buton clase = "numero" text = "6" handleClick = ""/> 
      <Buton clase = "operacion" text = "+" handleClick = ""/>
      <Buton clase = "numero" text = "1" handleClick = ""/>
      <Buton clase = "numero" text = "2" handleClick = ""/>
      <Buton clase = "numero" text = "3" handleClick = ""/>
      <Buton clase = "operacion" text = "-" handleClick = ""/>
      <Buton clase = "numero" text = "0" handleClick = ""/>
      <Buton clase = "numero" text = "." handleClick = ""/>
      <Buton clase = "especial" text = {<LuDelete />} handleClick = ""/>
      <Buton clase = "operacion" text = "=" handleClick = ""/>
      
    </main>
  );
}

export default App;
