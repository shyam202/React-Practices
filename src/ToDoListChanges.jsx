import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListToDo from './ListToDo';

const ToDoListChange = () => {

    const [item, setItem] = useState(""); 
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewItem((prevValue) => {
                return [...prevValue, item];
        });
        setItem("");
    };



    return  <>
        <div className = 'main_div'>
        <div className = 'center_div'>
            <br /> 
            <h1>ToDo List</h1>
            <input type="text" placeholder="Add Item Here" value = {item} onChange= {itemEvent} />
            <Button className='new_btn' onClick={listOfItems}>
                <AddIcon /> 
            </Button> 
            <br />
            <ol> 
               {newItem.map((val, index) => {
                    return <ListToDo key={index} text={val}/>
                })}
            </ol>
            <br />
        </div>
        </div>

   </> 
    
}



export default ToDoListChange;

