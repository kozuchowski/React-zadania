import React, {Component} from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

const App = () => {
    return <HelloWorld />
}

ReactDOM.render(<App/>, document.getElementById("app"));
