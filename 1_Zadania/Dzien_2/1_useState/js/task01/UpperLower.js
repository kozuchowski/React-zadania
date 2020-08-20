import React , { useState } from "react";

const UpperLower = () => {
    const [text, setText] = useState("dowolny napis");


    const upper = () => {
        setText(prevState => prevState.toUpperCase())
    }

    const lower = () => {
        setText(prevState => prevState.toLocaleLowerCase())
    }

    return (
    <>
        <h2>{text}</h2>
        <button onClick={upper}>Uppercase</button>
        <button onClick={lower}>Lowercase</button>
    </>
    )
} 

export default UpperLower;