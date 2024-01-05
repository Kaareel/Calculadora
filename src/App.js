import react, { useState } from 'react';
import './App.css';
import Buton from "./Componentes/Buton/Buton.js";
import { CgMathDivide } from "react-icons/cg";
import { TbMath } from "react-icons/tb";
import { LuDelete } from "react-icons/lu";


function App() {
  const {data, setdata} = useState({ operacion:'', resultado:''});
  return (
    <main >
      <span className = "resultado" type = "text">{data.resultado}</span>
      <span className = "displey" type = "text">{data.operacion}</span>
      <Buton class = "especial" text = "C"  handleClick = ""/>
      <Buton class = "especial" text = "%" handleClick = ""/>
      <Buton class = "especial" text = {<TbMath />} handleClick = ""/>
      <Buton class = "operacion" text = {<CgMathDivide />} handleClick = ""/>
      <Buton class = "numero" text = "7" handleClick = ""/>
      <Buton class = "numero" text = "8" handleClick = ""/>
      <Buton class = "numero" text = "9" handleClick = ""/>
      <Buton class = "operacion" text = "x" handleClick = ""/>
      <Buton class = "numero" text = "4" handleClick = ""/>
      <Buton class = "numero" text = "5" handleClick = ""/>
      <Buton class = "numero" text = "6" handleClick = ""/> 
      <Buton class = "operacion" text = "+" handleClick = ""/>
      <Buton class = "numero" text = "1" handleClick = ""/>
      <Buton class = "numero" text = "2" handleClick = ""/>
      <Buton class = "numero" text = "3" handleClick = ""/>
      <Buton class = "operacion" text = "-" handleClick = ""/>
      <Buton class = "numero" text = "0" handleClick = ""/>
      <Buton class = "numero" text = "." handleClick = ""/>
      <Buton class = "especial" text = {<LuDelete />} handleClick = ""/>
      <Buton class = "operacion" text = "=" handleClick = ""/>
      
    </main>
  );
}

export default App;
