import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  //const [title,setTitle] = useState(props.name);    //useState is an array which stores only 2 values. previous one and updated one



  // const clickHandler = function(){
  //   console.log("clicked!!!!!!!!!!!!");
  //   setTitle("updated ");
  
  
    return (
    <Card className="expense-item">
    <ExpenseDate daynew = {props.day}/>
      
      <div className="expense-item__description">
        <h2>{props.name} </h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
