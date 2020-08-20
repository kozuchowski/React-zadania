import React, {Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";

const DynamicLego = () => {
  const [blocks,setBlocks] = useState();
  const [qnt,setQnt] = useState([])


  useEffect(()=>{
    setQnt([])
    
    for (let index = 1; index <= blocks; index++) {
      setQnt(prevState=>[...prevState,1])
    }
  },[blocks])


    

  return (
    <>
      <form>
        <input type="number" onChange={e=>setBlocks(e.target.value)}></input>
      </form>
      <ul>
        {qnt.map((e,i)=> <li key={i} style={{margin:"10px", background:"red", height:"50px", width:(i+1)*50+"px"}}></li>)}
      </ul>

    </>
  )
}



const App = () => <DynamicLego />

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
