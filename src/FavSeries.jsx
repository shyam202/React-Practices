import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";


const Mirzapur = () => {
 return (
    <Card 
      key = {Sdata[1].id} 
      imgsrc={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
  );
}; 



 export default Mirzapur;
