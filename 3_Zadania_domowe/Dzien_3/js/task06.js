import React, {Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";


const WarningOrData = ({warning,user,mail,gender,submitCheck,address,code,city}) => {
  if(warning.length !==0){
    return(
      <p>{warning}</p>
    )
  }else if(submitCheck===1 && warning.length === 0){
    console.log("działa")
    return(
    <>
    <p>Imię i nazwisko: {user}</p>
    <p>email: {mail}</p>
    <p>płeć: {gender}</p>
    <p>adres: {address}</p>
    <p>kod pocztowy: {code}</p>
    <p>miejscowość: {city}</p>
    </>
    )
  }else{
    console.log(user.length)
    return null
  
  }
}

const Register = () => {
const [user,setUser] =useState("");
const [mail,setMail] =useState("");
const [password,setPassword] =useState("");
const [confirmPassword,setConfirmPassword] =useState("");
const [gender,setGender] =useState("mężczyzna");
const [warning,setWarning] = useState("");
const [submitCheck,setSubmitCheck] = useState(0);
const [address,setAddress] = useState("");
const [code,setCode] = useState("");
const [city,setCity] = useState("")
  


    

  const submit = (e) => {
    e.preventDefault();
    setSubmitCheck(1)
    setWarning("")
    if(user.length < 5){
      setWarning("za krótkie imię lub nazwisko. ")
    }
    if(mail.length<3 || mail.indexOf("@")=== -1){
      setWarning(prevState=>prevState+"Niepoprawny email. ")
    }   
    if(password.length < 4 || password !== confirmPassword){
      setWarning(prevState=>prevState+"Niepoprawne hasło. ")
    } 
    if(address.length<3){
      setWarning(prevState=> prevState + "Niepoprawny adres. ")
    }
    if((code.length === 5 && isNaN(code)===false)||(code.length === 6 && code.indexOf("-")===2)){
    }else {
      setWarning(prevState=>prevState + "Niepoprawny kod")

    }
   
  }


  return (
    <>
      <form style={{width:"300px",display:"flex" ,flexDirection:"column"}}>
        <p>Dane osobowe</p>
          <input onChange={e=>{setUser(e.target.value);setSubmitCheck(0)}} type="text" placeholder="imię i nazwisko"></input>
          <input onChange={e=>{setMail(e.target.value);setSubmitCheck(0)}} type="email" placeholder="email"></input>
          <input onChange={e=>{setPassword(e.target.value);setSubmitCheck(0)}} type="password" placeholder="hasło"></input>
          <input onChange={e=>{setConfirmPassword(e.target.value);setSubmitCheck(0)}} type="password" placeholder="powtórz hasło"></input>
          <select onChange={e=>{setGender(e.target.value);setSubmitCheck(0)}}>
            <option>mężczyzna</option>
            <option>kobieta</option>
          </select>
         <p>Dane do wysyłki</p>
         <input onChange={e=>{setAddress(e.target.value);setSubmitCheck(0)}} type="text" placeholder="adres"></input>
         <input onChange={e=>{setCode(e.target.value);setSubmitCheck(0)}} type="text" placeholder="kod pocztowy"></input>
         <input onChange={e=>{setCity(e.target.value);setSubmitCheck(0)}} type="text" placeholder="miejscowość"></input>

      </form>
      <button onClick={e=>submit(e)}>Zapisz</button>
      <WarningOrData warning={warning} user={user} mail={mail} gender={gender} submitCheck={submitCheck} address={address} code={code} city={city} />
    </>
  )
}

const App = () => <Register />

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
