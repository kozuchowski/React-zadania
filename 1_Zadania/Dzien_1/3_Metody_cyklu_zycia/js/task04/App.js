import React, {Component} from "react";
import ReactDOM from "react-dom";
import CLock from "./Clock";

const App = () => (
    <CLock />
)

ReactDOM.render(<App/>, document.getElementById("app"));
