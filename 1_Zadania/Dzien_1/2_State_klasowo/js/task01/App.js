import React, {Component} from "react";
import ReactDOM from "react-dom";
import CurrentDate from "./CurrentDate";

const App = () => (
    <CurrentDate />
)

ReactDOM.render(<App/>, document.getElementById("app"));
