import React, { useState } from "react";
const App=(props)=>{

  const [result,setResult]=useState("");
  const getEvent=(e)=>{
    setResult(result+(e.target.name))
      console.log(e.target.name);
  }

  const clear=()=>{
    setResult("");
  }

  const backspace=(e)=>{
    setResult(result.slice(0,-1));//or slice(0,result.length-1)
  }

  const calculate=()=>{
    try{
      setResult(eval(result).toString());
    }catch(error){
      setResult("Error");
    }
    
  }

  return(
    <>
        <div className="calc">
          <input type="text" placeholder="0" value={result}/> <br />
          <button id="clear" onClick={clear}>C</button>
          <button id="del" onClick={backspace}>X</button>
          <button name="%" onClick={getEvent}>%</button>
          <button name="/" onClick={getEvent}>/</button>
          <button name="7" onClick={getEvent}>7</button>
          <button name="8" onClick={getEvent}>8</button>
          <button name="9" onClick={getEvent}>9</button>
          <button name="*" onClick={getEvent}>x</button>
          <button name="4" onClick={getEvent}>4</button>
          <button name="5" onClick={getEvent}>5</button>
          <button name="6" onClick={getEvent}>6</button>
          <button name="-" onClick={getEvent}>-</button>
          <button name="1" onClick={getEvent}>1</button>
          <button name="2" onClick={getEvent}>2</button>
          <button name="3" onClick={getEvent}>3</button>
          <button name="+" onClick={getEvent}>+</button>
          <button name="0" onClick={getEvent}>0</button>
          <button name="." onClick={getEvent}>.</button>
          <button id="res" onClick={calculate} className="equal">=</button>
        </div>
    </>
  )
}
export default App;