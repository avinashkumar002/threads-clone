// import React from 'react'

export default function Input({ placeholder="", name="",handleInput }) { 
  // const { placeholder, name } = props;
  return (
    <div>
      <input className="common-input"  
      placeholder={placeholder} 
       name ={name} 
       onChange={handleInput}/>
    </div>
  );
}

