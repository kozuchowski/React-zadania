import React, {useState} from "react";
import ReactDOM from "react-dom";


const PropsToState = (props) => {
  const [text,setText] = useState(props.text)
  const [counter,setCounter] = useState(0)

  setInterval(() => {
    setCounter(prevState => prevState+1)
    console.log(counter)
    setText(prevState => prevState + ".")
  }, 1000);

  return(
    <ShowInfo info={text} />
  )
}

const ShowInfo = (props) => (
<h1>{props.info}</h1>
)

ReactDOM.render(
  <PropsToState text = "Patrycja, no!no!no!"/>,
  document.getElementById("app")
);
