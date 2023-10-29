// import React from 'react';
import {useState} from 'react';
import Input from "./Common/Input" ;
import {signUp} from "../API/Auth";
import IGLogo from "../assets/IGLogo.png"


export default function SignUp() {
    const [inputs , setInputs] = useState({});
    function handleInput(event){
    let{ name ,value} = event.target;
    let input ={[name]:value};
    setInputs((prev)=>({...prev,...input}));
    }
   function handlesignUp(){
       let response = signUp(inputs.email,inputs.password)
       console.log(response);
   }

   return (
    <div className="login-container">
       <img className="Ig-logo" src={IGLogo} alt="logo" /> 
       <Input 
      placeholder="Enter your name" 
      name="name" 
      handleInput={handleInput}
      />

      <Input 
      placeholder="Enter email address" 
      name="email" 
      handleInput={handleInput}
      />

      <Input 
      placeholder="Password" 
      name="password"
      handleInput={handleInput}
      />

      <button className="login-btn" onClick={handlesignUp} >Sign Up</button>
    </div>
  );
}
