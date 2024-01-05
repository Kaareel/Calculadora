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
      <Button clase = "especial" text = "C"  handleClick = ""/>
      <Button clase = "especial" text = "%" handleClick = ""/>
      <Button clase = "especial" text = {<TbMath />} handleClick = ""/>
      <Button clase = "operacion" text = {<CgMathDivide />} handleClick = ""/>
      <Button clase = "numero" text = "7" handleClick = ""/>
      <Button clase = "numero" text = "8" handleClick = ""/>
      <Button clase = "numero" text = "9" handleClick = ""/>
      <Button clase = "operacion" text = "x" handleClick = ""/>
      <Button clase = "numero" text = "4" handleClick = ""/>
      <Button clase = "numero" text = "5" handleClick = ""/>
      <Button clase = "numero" text = "6" handleClick = ""/> 
      <Button clase = "operacion" text = "+" handleClick = ""/>
      <Button clase = "numero" text = "1" handleClick = ""/>
      <Button clase = "numero" text = "2" handleClick = ""/>
      <Button clase = "numero" text = "3" handleClick = ""/>
      <Button clase = "operacion" text = "-" handleClick = ""/>
      <Button clase = "numero" text = "0" handleClick = ""/>
      <Button clase = "numero" text = "." handleClick = ""/>
      <Button clase = "especial" text = {<LuDelete />} handleClick = ""/>
      <Button clase = "operacion" text = "=" handleClick = ""/>
      
    </main>
  );
}

export default App;
