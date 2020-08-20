import React, {Component} from "react"

class RandomNumbers extends Component {
    state = {
        numbers:[]
    }

    random = () => {
        let numb = Math.floor(Math.random()*899)+100
        this.setState((prevState) => ({
            numbers:[...prevState.numbers, numb]
        }))
    }

    render () {
        return (
            <>
            <button onClick={this.random}>click</button>
            <ul>
                {this.state.numbers.map(el => (
                    <li key={this.state.numbers.indexOf(el)}>{el}</li>
                ))}
            </ul>
            </>
        )
    }
}

export default RandomNumbers;