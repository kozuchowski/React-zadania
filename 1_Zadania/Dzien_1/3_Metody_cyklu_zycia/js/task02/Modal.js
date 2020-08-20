import React, {Component} from "react"

class Modal extends Component {
    state = {
        heading:this.props.heading,
        modalOpen:false
    }

    render () {
    if(this.state.modalOpen == false){
        return <h1></h1>
    }else return <h1>{this.state.heading}</h1>
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                modalOpen:true
            })
        }, 2000);
    }
}


export default Modal;