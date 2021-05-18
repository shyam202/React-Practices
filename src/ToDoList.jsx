import React, { useState } from "react";
import "./index.css";
import ItemList from "./ItemList";
import DeleteIcon from '@material-ui/icons/Delete';


const ToDoList = () =>{

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) =>{
       setInputList(event.target.value);
    };

    const listOfItems = () => { 
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });

        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
            return index !== id;

           })
        })
    };


    return(
    <>
    <div className="main_div">
    <div className="center_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type = "text" placeholder = "Add Your Items" value = {inputList} onChange = {itemEvent}  />
    <button onClick={listOfItems}> + </button>


    <ol>
        {Items.map((itemval, index) => {
          return (<ItemList key = {index} id = {index} text = {itemval} onSelect = {deleteItems} />);
        })}
    </ol>
    </div>     
    </div>

    </>
    )
};


export default ToDoList;