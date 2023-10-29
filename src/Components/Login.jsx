// import React from 'react';
import {useState} from 'react';
import Input from "./Common/Input" ;
import IGLogo from "../assets/IGLogo.png"


export default function Login() {
    const [inputs , setInputs] = useState({});
    function handleInput(event){
    let{ name ,value} = event.target;

        let input ={[name]:value};
        setInputs((prev)=>({...prev,...input}));

    }
   console.log(inputs);
   return (
    <div className="login-container">
       <img className="Ig-logo" src={IGLogo} alt="logo" /> 
      <Input placeholder="Enter email address" name="email" handleInput={handleInput}/>
      <Input placeholder="Password" name="password" handleInput={handleInput}/>
      <button className="login-btn">Log In</button>
    </div>
  );
}
