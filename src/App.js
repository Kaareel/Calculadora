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
      <span className="resultado" type = "text">50</span>
      <span className="displey" type = "text">25 + 25</span>
      <Button className="especial" text="C"  onClick=""/>
      <Button className="especial" text="%" onClick=""/>
      <Button className="especial" text={<TbMath />} onClick=""/>
      <Button className="operacion" text={<CgMathDivide />} onClick=""/>
      <Button className="numero" text="7" onClick=""/>
      <Button className="numero" text="8" onClick=""/>
      <Button className="numero" text="9" onClick=""/>
      <Button className="operacion" text="x" onClick=""/>
      <Button className="numero" text="4" onClick=""/>
      <Button className="numero" text="5" onClick=""/>
      <Button className="numero" text="6" onClick=""/> 
      <Button className="operacion" text="+" onClick=""/>
      <Button className="numero" text="1" onClick=""/>
      <Button className="numero" text="2" onClick=""/>
      <Button className="numero" text="3" onClick=""/>
      <Button className="operacion" text="-" onClick=""/>
      <Button className="numero" text="0" onClick=""/>
      <Button className="numero" text="." onClick=""/>
      <Button className="especial" text={<LuDelete />} onClick = ""/>
      <Button className="operacion" text="=" onClick=""/>
      
    </main>
  );
}

export default App;
