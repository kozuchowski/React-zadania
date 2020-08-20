import React, {Component} from "react";
import ReactDOM from "react-dom";

class UpperCaseText extends Component {
  render() {
    return <h2>{this.props.text.toLocaleUpperCase()}</h2>;
  }
}


ReactDOM.render(
  <UpperCaseText text = "Hello World!" />,
  document.getElementById("app")
);
