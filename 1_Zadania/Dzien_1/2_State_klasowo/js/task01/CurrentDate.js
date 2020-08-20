import React, { Component } from "react"



class CurrentDate extends Component{
    
    state = {
        hour:new Date().getHours(),
        min:new Date().getMinutes(),
        sec:new Date().getSeconds(),
        day:new Date().getDay(),
        month:new Date().getMonth(),
        year:new Date().getFullYear()

    }
    
    getDate = () => {
        let date = new Date
        
        this.setState({
            sec:date.getSeconds(),
            min:date.getMinutes(),
            hour:date.getHours(),
            day:date.getDay(),
            month:date.getMonth(),
            year:date.getFullYear()
            
        })
    }
    render(){
        return (
            <>
            <h1>{this.state.hour}:{this.state.min}:{this.state.sec},</h1>
            <h1>{this.state.day}/{this.state.month}/{this.state.year}</h1>
            <button onClick={this.getDate}>click</button>
            </>
        )

        
    }
    
    
}

export default CurrentDate;