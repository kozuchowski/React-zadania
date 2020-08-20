import React, {Component} from "react";
import ReactDOM from "react-dom";
import{ HoverEvent, HoverEvent2 } from "./HoverEvent";

const App = () => (
    <>
    <HoverEvent />
    <HoverEvent2 />
    </>

)

ReactDOM.render(<App/>, document.getElementById("app"));
