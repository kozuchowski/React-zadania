import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

const PESELInput = () => {
    const [display,setDisplay] = useState("none");
    const [value,setValue] = useState(0);
    const [warning,setWarning] = useState()

   
    if(value.toString().length === 11&& isNaN(value)===false && display ==="none" ){
      setDisplay("block")
      setWarning("")
    }
    
    if ((value.toString().length !== 11|| isNaN(value)!==false) && warning!=="Niepoprawny PESEL" ){
      setWarning("Niepoprawny PESEL")
      setDisplay("none")
    }

  return(
    <>
      <form>
        <input onChange={(e)=> setValue(e.target.value)}></input>
      </form>
      <div><div >{warning}<input style={{display:display}} type="submit"/></div></div>
    </>
  )
}

const App = () => <PESELInput />

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
