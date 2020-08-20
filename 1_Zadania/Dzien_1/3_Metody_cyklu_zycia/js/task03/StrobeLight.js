import React, { Component } from "react";

class StrobeLight extends Component {
    state = {
        color:"white",
        frequency:this.props.frequency
    }

    render () {
        return <div style={{width:"500px", height:"50px",background:this.state.color}}></div>
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.color == "white"){
                this.setState ({
                    color:this.props.color
                })
            }else {
                this.setState ({
                    color:"white"
                })
            }
        }, this.state.frequency);
    }
}

export default StrobeLight;