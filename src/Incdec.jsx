import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';


const Incdec = () => {
    const[num, setNum] = useState(0);

    const incr = () => {
        setNum(num + 1);
    }

    const decr = () => {
      
        if(num > 0){
            setNum(num - 1);
        }else{
            alert("Sorry : 0 limit is reached")
            setNum(0);
        }
    }


    return(
        <>
        <Clock />
        <div className = 'main_div'>
        <div className =  'center_div'>
    
        <h1> {num} </h1>
        
        <div className = 'btn_div'>
            <Tooltip title="Add" aria-label="add">
            <Button onClick = {incr} className = "btn_green" > <AddIcon /> </Button>
            </Tooltip>
            <Tooltip title="Minus" aria-label="minus">
            <Button onClick = {decr} className = "btn_red"> <RemoveIcon /> </Button>
            </Tooltip>
        </div>

        </div>
        </div>

        </>

    )

}


export default Incdec;