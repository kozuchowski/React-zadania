import React, {Component} from "react";
import ReactDOM from "react-dom";

class AnotherColor extends Component {
  state = {
    color: "yellow"
  }

  render() {
    return (
      <div style={{width:"200px", height:"200px", background:this.state.color}}></div>
    )
  }

 componentDidMount() {
  setTimeout(() => {
    this.setState({
      color:"blue"
    })
  }, 5000);
 }
}


ReactDOM.render(
  <AnotherColor />,
  document.getElementById("app")
);
