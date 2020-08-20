import React from "react";

const EventsTest = () => {

    const click = () => {
        console.log("kliknięto diva")
    }
    const mouseEnter = () => {
        console.log("najechano na diva")
    }

    const out = () => {
        console.log("zjechano z diva")
    }

    return <div onClick={click} onMouseEnter={mouseEnter}  onMouseOut={out} style={{width:"100px", height:"100px", background:"red"}}></div>
}

export default EventsTest;