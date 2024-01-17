import { useEffect, useState } from 'react';
import './App.css';
import Button from "./Componentes/Button/Button.js";
import { CgMathDivide } from "react-icons/cg";
import { LuDelete } from "react-icons/lu";


function App() {
  const [operation, setOperation] = useState('0');
  const [total, setTotal] = useState('0');

  const symbols = ['+', '-', '*', '/', '+/-','%']

  const modifyOperation = (value) => {
  
    if (['+', '-', '*', '/'].includes(value) && symbols.find(sym => operation.includes(sym))) {
      const lastCharacter = operation[operation.length - 1];
    
      if (symbols.includes(lastCharacter)) {
        const newOperation = operation.replace(lastCharacter, value);
        setOperation(newOperation);
        return;
      }
    
      try {
        const calculate = new Function('return ' + operation);
        const result = calculate();
    
        setTotal(result);
        setOperation(result + value);
      } catch (error) {
        setTotal('Error');
      }
    
      return;
    }
    
    if (operation === '=') return setTotal(eval(operation));

    if (operation === '0') {
      return setOperation(value);
    }
  
    setOperation(operation + value);

  };
  
  const calculate = () => {
    setTotal(eval(operation));
  }

  const deleteValue = () => {
    if (operation.length === 1) return setOperation('0')

    setOperation(operation.slice(0, operation.length - 1))
  }

  const reset = () => {
    setOperation('0')
    setTotal('0')
  }


  return (
    <main >
      <span className="resultado" type="text">{total}</span>
      <span className="display" type="text">{operation}</span>
      <div className='container'>
        <Button className="operacion" value="+" onClick={() => modifyOperation("+")}>+</Button>
        <Button className="operacion" value="*" onClick={() => modifyOperation("*")}>*</Button>
        <Button className="operacion" value="-" onClick={() => modifyOperation("-")}>-</Button>
        <Button className="operacion" value="/" onClick={() => modifyOperation("/")}><CgMathDivide /></Button>
      </div>
      <div className="body">
      <div className='numbers'>
        <Button className="numero" value="7" onClick={() => modifyOperation("7")}>7</Button>
        <Button className="numero" value="8" onClick={() => modifyOperation("8")}>8</Button>
        <Button className="numero" value="9" onClick={() => modifyOperation("9")}>9</Button>
        <Button className="numero" value="4" onClick={() => modifyOperation("4")}>4</Button>
        <Button className="numero" value="5" onClick={() => modifyOperation("5")}>5</Button>
        <Button className="numero" value="6" onClick={() => modifyOperation("6")}>6</Button>     
        <Button className="numero" value="1" onClick={() => modifyOperation("1")}>1</Button>
        <Button className="numero" value="2" onClick={() => modifyOperation("2")}>2</Button>
        <Button className="numero" value="3" onClick={() => modifyOperation("3")}>3</Button>
        <Button className="numero" value="0" onClick={() => modifyOperation("0")}>0</Button>
        <Button className="numero" value="." onClick={() => modifyOperation(".")}>.</Button>
        <Button className="especial" value="" onClick={deleteValue}><LuDelete /></Button>
      </div>
      <div className='buttons'>
        <Button className="especial" value="" onClick={reset} >C</Button>
        <Button className="especial" value="=" onClick={calculate}>=</Button>
      </div>
      </div>

    </main>
  );
}

export default App;
