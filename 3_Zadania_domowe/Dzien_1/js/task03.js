import React, {Component} from "react";
import ReactDOM from "react-dom";


class TrafficLights extends Component {
  state = {
    light:1,
    red:"red",
    yellow:"black",
    green:"black"
  }

  

  componentDidMount(){
    

    const orangeRed = () => {
      setTimeout(() => {
        this.setState(() =>{
          return ({
            red:"red",
            yellow:"orange",
            green:"black"})
          
        })

        green()
      }, this.props.redTime);
    }

    const green = () => {
      setTimeout(() => {
        this.setState(() =>{
          return ({
            light:2,
            red:"black",
            yellow:"black",
            green:"green"})
          
        })

        orange()
      }, this.props.yellowTime);
    }

    const orange = () => {
      setTimeout(() => {
        this.setState(() =>{
          return ({
            light:2,
            red:"black",
            yellow:"orange",
            green:"black"})
          
        })

        red()
      }, this.props.greenTime);
    }

    const red = () => {
      setTimeout(() => {
        this.setState(() =>{
          return ({
            light:2,
            red:"red",
            yellow:"black",
            green:"black"})
          
        })

        orangeRed()
      }, this.props.yellowTime);
    }
    orangeRed()
                
              
          
            
        
  
          }
  

  render(){
    return (
      <div>
        <div style= {{width:"100px", height:"100px", borderRadius:"50%", background:this.state.red}}></div>
        <div style= {{width:"100px", height:"100px", borderRadius:"50%", background:this.state.yellow}}></div>
        <div style= {{width:"100px", height:"100px", borderRadius:"50%", background:this.state.green}}></div>
      </div>
    )
  }

}

ReactDOM.render(
  <TrafficLights redTime={3000} yellowTime={2000} greenTime={4000}/>,
  document.getElementById("app")
);
