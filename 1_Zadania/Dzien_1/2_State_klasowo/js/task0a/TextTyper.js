import React,{Component} from "react";




 class TextTyper extends Component {

    state = {
        text:this.props.txt,
        counter:2,
        newText:this.props.txt[0]
    }

    addLetter = () => {
      
        if(this.state.counter<=5){
            this.setState({
                counter:this.state.counter+1
    
            })
            this.state.newText=[]
            for (let i = 0; i<this.state.counter;i++){
                this.state.newText.push(this.state.text[i])
                console.log(this.state.counter)
    
            }
        }

    }

    removeLetter = () => {
        if(this.state.counter>1){
            
            this.setState({
                counter:this.state.counter-1
            })
            this.state.newText=this.state.newText.slice(0,-1)
        }

        console.log(this.state.counter)

    }

    render () {
    return (
        <>
        <h1>{this.state.newText}</h1>
        <button onClick={this.addLetter}>+</button>
        <button onClick={this.removeLetter}>-</button>
        </>
    )
    }
}

export default TextTyper;