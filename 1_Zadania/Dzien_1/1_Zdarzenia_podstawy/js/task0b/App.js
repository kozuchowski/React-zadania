import React, {Component} from "react";
import ReactDOM from "react-dom";
import ShowUserClass from "./ShowUserClass";
import ShowUserFunc from "./ShowUserFunc";


const App = () => (
    <>
    <ShowUserClass name="Patrysia" surname="Kocia"/>
    <ShowUserFunc name="Patrysia" surname="Kocia"/>
    </>

)
ReactDOM.render(<App/>, document.getElementById("app"));
