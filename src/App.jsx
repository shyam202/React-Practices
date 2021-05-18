import React, { useState } from "react";
import ReactDOM from "react-dom";


import "./index.css";

const App = () =>{

  const [fullName, setFullName] = useState({
      fName : " ",
      lName : " ",
      email : " ",
      phone : " ",
  });

  // const [lname, setName] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);


    const {value, name} = event.target;

    setFullName((preValue)=>{
      // console.log(preValue);

      return{
        ...preValue,
        [name] : value,

      };

      if(name === "fName"){
        return{
            fname: value,
            lname: preValue.lname,
            email: preValue.email,
            phone: preValue.phone,
        };
      }
        else if(name === "lName"){
          return{
              fname: preValue.fname,
              lname: value,
              email: preValue.email,
              phone: preValue.phone,
          };
      }
      else if(name === "email"){
        return{
            fname: preValue.fname,
            lname: preValue.lname,
            email: value,
            phone: preValue.phone,
        };
    }
    else if(name === "phone"){
      return{
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
    }

  });

};
 

const onSubmits = (event) => {
    event.preventDefault();
    // setFullName();
  };

    return (
      <>      
      <div className ="main_div">
      <form onSubmit={onSubmits}>
      <div>
        <h1>Hello {fullName.fname} {fullName.lname}   </h1>
        <p> {fullName.email} </p>
        <p> {fullName.phone} </p>
        <input type = "text"  name = "fName" onChange= {inputEvent}  value = {fullName.fname} placeholder = "Enter Your First Name" />
        <br />
        <input type = "text"  name = "lName" onChange= {inputEvent}  value = {fullName.lname} placeholder = "Enter Your Last Name" />
        <br />
        <input type = "email"  name = "email" onChange= {inputEvent}  value = {fullName.email} placeholder = "Enter Your Email ID" />
        <br />
        <input type = "number"  name = "phone" onChange= {inputEvent}  value = {fullName.phone} placeholder = "Enter Your Phone Number" />
        <button type ="submit" > Click Here 😄</button>
      </div>
      </form>
      </div>
      </>
    )
}



export default App; 