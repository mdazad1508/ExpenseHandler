import React,{useState} from "react";

import Card from "./UI/Card";
import ExpenseItem from "./Expenses/ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";




const Expenses = (props)=>{

  const [prevYear,newYear] = useState("2020")

  const yearHandler =(year)=>{

  newYear(year);


  }
  //first i filtered the array then mapped it accordingly
  const xyz = props.items.filter(num => num.date.getFullYear()==prevYear);


    return(
    <div className="App">
    <Card className="box">
    <br></br>
    <ExpenseFilter selectedYear ={yearHandler} yearSelected ={prevYear}>
    <h2>{prevYear}</h2>
    </ExpenseFilter>
    <ExpensesChart expenses={xyz} />

  
    {xyz.length ===0 && <p>No expenses were found</p>}
    {xyz.length>0 && xyz.map(expense => <ExpenseItem key={expense.id} name={expense.title}  price = {expense.amount} day ={expense.date} />)}
     
   
    </Card>
    
      
    </div>
    );


}

export default Expenses;