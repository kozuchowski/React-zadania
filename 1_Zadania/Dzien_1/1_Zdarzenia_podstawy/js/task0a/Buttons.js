import React, {Component} from "react";
import ReactDOM from "react-dom";

export const Buttons = () => (
    <>
    <button onClick={consoleClick}>Click!</button>
    <button onClick={power}>Click!</button>
    <button onClick={windowSize}>Click!</button>
    </>
)

const consoleClick = () => {
    console.log("Pierwszy przycisk kliknięty")
}

const power = () => {
    const a = prompt("podaj liczbę A");
    const b = prompt("Podaj liczbę B")
    let pow = 1;
    for (let i = 0; i<b; i++){
         pow *= a
    }
    console.log(pow)
}

const windowSize = () => {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
}