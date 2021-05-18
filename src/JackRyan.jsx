import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";


const JackRyan = () => {
 return (
    <Card 
      key = {Sdata[3].id} 
      imgsrc={Sdata[3].imgscr}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
    />
  );
}; 



 export default JackRyan;