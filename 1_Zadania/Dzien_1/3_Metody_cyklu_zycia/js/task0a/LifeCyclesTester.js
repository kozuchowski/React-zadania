import React,{Component} from "react"

class LifeCyclesTester extends Component {
    constructor(){
        super();
        console.log("constructor")
    }
    componentDidUpdate(){
        console.log("komponent zaktualizowany")
    }
    componentDidMount(){
        console.log("komponent zamontowany")
    }
    componentWillUnmount(){
        console.log("komponent odmontowany")
    }
    render(){
        console.log("renderowanie")
        return <h1>Renderowanie</h1>
    }
}

export default LifeCyclesTester;