import React, {useState} from "react"

const Counter = () => {
    const [counter,setCounter] = useState(10);

    const add = () => {
        setCounter(prevState => prevState +1)
    }

    const sub = () => {
        setCounter(prevState => prevState -1)
    }

    const res = () => {
        setCounter(10)
    }

    return (
    <>
    <h2>liczba kliknięć{counter}</h2>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    <button onClick={res}>Reset</button>
    </>
    )
}

export default Counter;