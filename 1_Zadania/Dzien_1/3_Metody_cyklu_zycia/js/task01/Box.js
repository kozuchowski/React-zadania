import React , {Component} from "react"

class Box extends Component{
    state = {
        color: "green"
    }

    render (){
        return <div style={{width:"200px", height:"200px", background:this.state.color}}></div>
    }

    componentDidMount(){
        setInterval(() => {
            if(this.state.color == "green"){
                this.setState({
                    color:"red"
                })
            }else {
                this.setState({
                    color:"green"
                })
            }
        }, 3000);
    }
}

export default Box;