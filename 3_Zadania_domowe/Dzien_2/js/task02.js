import React, {Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";

const SpeedClickGame = ({tim}) => {
  const [time,setTime] = useState(tim);
  const [tempTime,setTempTime] = useState(time);
  const [score,setScore] = useState(0);
  const [intervalId,setIntervalId] = useState();
  const [btn,setBtn] = useState(false)

  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(prevState => prevState - 50)
    }, 500);
    setIntervalId (interval)

    return()=>{
        clearInterval(interval)

  }},[]);

if(time === 0 && btn === false ){
  clearInterval(intervalId)
  setBtn(true)
}

  const change = () => {
    setTime(tempTime-50)
    setTempTime(prevState => prevState - 50);
    
    
    setScore(prevState => prevState + 1)
  
  }

  return(
    <>
      <button disabled={btn} onClick={change}>Click me</button>
      <div>
      <h1>czas: {time}</h1>
      <h2>punkty: {score}</h2>
      </div>
    </>
  )

}

const App = () => <SpeedClickGame tim = {1000}/>

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
