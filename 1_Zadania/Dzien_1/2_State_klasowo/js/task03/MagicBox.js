import React,{Component} from "react"

class MagicBox extends Component{
    state = {
        color:"#000"
    }

    

    newColor = () => {
        const randomColor = '#' +  Math.floor(Math.random()*16777215).toString(16)
        this.setState({
            color:randomColor
        })
        
        
    }
    styles = {
        width:"200px",
        height:"200px",
        background:this.state.color
    }

    render(){
        
        return (
            <div onClick={this.newColor} style={{width:"200px", height:"200px", background:this.state.color}}></div>
            )
        
    }
}

export default MagicBox;