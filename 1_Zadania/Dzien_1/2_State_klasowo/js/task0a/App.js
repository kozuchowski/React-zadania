import React, {Component} from "react";
import ReactDOM from "react-dom";
import TextTyper from "./TextTyper";

const App = () => (
    <TextTyper txt="cześć"/>
)

ReactDOM.render(<App/>, document.getElementById("app"));
