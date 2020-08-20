import React, { useState } from "react";

const Show = (props) => {

   
   if(props.temp === 1){
    
       return (
           <ul>
               {props.numb.map(e=> <li key={props.numb.indexOf(e)}>{e}</li>)}
           </ul>
       )
      
   }else if(props.temp === 0) {
       return (
       <ul>{props.numb.map(e=> <li key={props.numb.indexOf(e)}>{e}</li>)}</ul>
       )
   }
    
}

const Numbers = () => {
    const [numb, setNumb] = useState([2,4,23,67])
    const [tempArr, setTempArr] = useState()
    const [temp, setTemp] = useState(1)
    
    const all = () => {
    setNumb(tempArr)

    }

    const unEven = (e) => {
        return e%2
    }

   const showUnEven = () => {
        setTempArr(numb)
        setNumb(prevState => prevState.filter(unEven))
        
    }



return (
    <>
    <button onClick={all}>Pokaż wszystkie</button>
    <button onClick={showUnEven}>Pokaż nieparzyste</button>
    <Show tempArr={tempArr} numb={numb} temp = {temp}/>
    </>

)

}

export default Numbers;