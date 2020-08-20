import React, {Component, useState} from "react";
import ReactDOM from "react-dom";


const WhoIsPresent = () => {
  const [users,setUsers] = useState(["Anna Kowalska", "Jan Kowalski","Maciej Von Handerburg","Jurand ze Spychowa"])
  const [selectedUsers,setSelectedUsers] = useState([])

  const select = (e) => {
    const selected = users.indexOf(e);
    setSelectedUsers(prevState=> [...prevState,e])
    users.splice(selected,1)
    console.log(users)
    console.log(e)
    console.log(selected)
  }

  return (
    <form>
      <select value="" onChange={e=>select(e.target.value)} >
        <option value="" ></option>
        {users.map((e,i)=><option  key={i}>{e}</option>)}
      </select>
      <ul>
        {selectedUsers.map((e,i)=><li key={i}>{e}</li>)}
      </ul>
    </form>
  )
}

const App = () => <WhoIsPresent />
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
 