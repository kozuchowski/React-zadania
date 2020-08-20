import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";

const UsersForm = () => {

  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [age,setAge] = useState("");
  const [city,setCity] = useState("");
  const [gender,setGender] = useState("");


  const submit = (e) => {
    e.preventDefault();

    
  }


  return(
    <>
      <form style={{display:"flex",flexDirection:"column",width:"200px"}}>
        <input onChange={e=>setName(e.target.value)} type="text" placeholder="name"></input>
        <input onChange={e=>setSurname(e.target.value)} type="text" placeholder="surname"></input>
        <input onChange={e=>setAge(e.target.value)} type="text" placeholder="age"></input>
        <select value={city} onChange={e=>setCity(e.target.value)}>
          <option disabled={true} value="">Wybierz miasto</option>
          <option>Warszawa</option>
          <option>Lubartów</option>
          <option>Świdnik</option>
          <option>Lublin</option>
        </select>
        <label>
          <input onChange={e=>setGender(e.target.value)} type="radio" name="gender"/>Female
          </label>
          <label>
        <input onChange={e=>setGender(e.target.value)} type="radio" name="gender"/>Male
          </label>
          <label>
        <input onChange={e=>setGender(e.target.value)} type="radio" name="gender"/>I don't wanna say
        </label>
      
        
        <button onClick={e=>submit(e)} type="submit">Submit</button>
      </form>
      <Users />
    </>
  )
}

const Users = () => {
  const [users,setUsers] = useState()

  const API = "http://localhost:3000";

 
useEffect(()=>{
  fetch(`${API}/users`)
  .then(response => response.json())
  .then(data => {
    setUsers(data[0])
    
  })
  .catch(error => {
    console.log(error);
  });
  

},[users])

if (users === undefined) {
  return null
} else {
  return(
    <ul style={{listStyleType:"none", color:"cornflowerblue", fontSize:"2rem"}}>
      <li>{users.id}</li>
      <li>{users.name}</li>
      <li>{users.surname}</li>
      <li>{users.age}</li>
      <li>{users.city}</li>
      <li>{users.gender}</li>
    </ul>
  )
}



}

const App = () => <UsersForm />

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
