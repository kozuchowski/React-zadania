import React, {Component} from "react";


class ShowUserClass extends Component {

    userData = () => {
        console.log(this.props.name,this.props.surname)
    }

    render (){
        return (
            <button onClick={this.userData}>Dane użytkownika</button>
            )
} 
}


export default ShowUserClass;