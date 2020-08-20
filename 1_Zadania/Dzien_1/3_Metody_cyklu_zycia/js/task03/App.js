import React, {Component} from "react";
import ReactDOM from "react-dom";
import StrobeLight from "./StrobeLight";

const App = () => (
    <StrobeLight color="pink" frequency="1000" />
)

ReactDOM.render(<App/>, document.getElementById("app"));
