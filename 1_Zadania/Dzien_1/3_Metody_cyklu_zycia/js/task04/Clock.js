import React, { Component } from "react";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

class CLock extends Component {
    state = {
        currentDate: new Date
    }

    render() {
        return (
            <>
            <ClockTime date={this.state.currentDate} />
            <ClockDate date={this.state.currentDate}/>
            </>
        )
    }
}

export default CLock;