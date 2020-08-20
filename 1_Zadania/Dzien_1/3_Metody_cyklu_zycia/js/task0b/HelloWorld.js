import React, {Component} from "react"

class HelloWorld extends Component {
    state = {
        text:"Hello World!"
    }

    render() {
    return <h1>{this.state.text}</h1>
    }

    componentDidMount(){
        console.log("zamontowano")
        setTimeout(() => {
            this.setState({
                text:"Hi everyone!"
            })
        }, 2000);
    }

    componentWillUnmount(){
        console.log("odmontowano")
    }
}

export default HelloWorld;