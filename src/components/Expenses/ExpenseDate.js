import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props){
    const day = props.daynew.toLocaleDateString('en-US',{day:'numeric'});
    const month =props.daynew.toLocaleDateString('en-US',{month:'long'});
    const year = props.daynew.toLocaleDateString('en-US',{year:'numeric'});

    return(
        <div className="expense-date">
           <div className="expense-date__day">{day}</div>
           <div className="expense-date__month">{month}</div>
           <div className="expense-date__year">{year}</div>
      </div>

    )
}

export default ExpenseDate;