const { Component } = require("react")

import React from "react";
import ShowUserClass from "./ShowUserClass";

const ShowUserFunc = (props) => {

    const userData = () => {
        console.log(props.name, props.surname)
    }
    return <button onClick={userData}>Dane użytkownika</button>
    }

export default ShowUserFunc;