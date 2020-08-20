import React,{Component} from "react";

export const HoverEvent2 = () => {
    const onButton = () => {
        console.log("Najechano na przycisk")
    }
    return <button onMouseEnter={onButton}>click</button>
    
}

export class HoverEvent extends Component {

    

    render() {
        const onButton = () => {
            console.log("Najechano na przycisk.")
        }
        return <button onMouseEnter={onButton}>button</button>
    }
}
