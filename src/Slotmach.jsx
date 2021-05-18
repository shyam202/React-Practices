import React from "react";
import ReactDOM from "react-dom";

const SlotM = (props) => {
let {x , y, z} = props;

  if ((props.x===props.y) && (props.y===props.z)){
    return(
      <>
        <div className = "slot_inner">
            <h1 > {x} {y} {z}  </h1>
            <h1 > This is Matching  </h1>
            <hr /> 
        </div>
      </>
    )
  } else {
    return(
      <>
        <div className = "slot_inner">
            <h1 > {x} {y} {z}  </h1>
            <h1 > This is not Matching  </h1>
            <hr /> 
        </div>
      </>
    )
  }
}



export default SlotM;