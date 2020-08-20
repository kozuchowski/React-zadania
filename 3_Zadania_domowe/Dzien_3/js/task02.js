import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

const AdultStuffBox = ({age}) => {
  if(age>=18){
    return (
      <p>Lorem ipsum treść dla pełnoletnich</p>
    )
  }else return null
}

const AdultStuff = () => {

const [age,setAge] = useState();

console.log(age)

return (
 <>
     <form >
    <input type="number" onChange={e=>setAge(e.target.value)}></input>
  </form>
  <AdultStuffBox age= {age}/>
 </>
)

}


const App = () => <AdultStuff />

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
