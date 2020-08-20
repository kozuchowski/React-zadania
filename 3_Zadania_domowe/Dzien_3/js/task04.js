import React, {Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";


const Notes = () => {

const [text,setText] = useState();


const a = (e) => {
  e.preventDefault()
  setText('')
}

  return (
    <form>
      <textarea value={text} onChange={e=>setText(e.target.value)}></textarea>
      <button onClick={e=>a(e)}>click</button>
      <span>{text}</span>
    </form>
  )
}

const App = () => <Notes />
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
