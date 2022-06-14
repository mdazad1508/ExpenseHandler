import React,{useState} from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props){

    const [clicked,onclicked] = useState(false);

    const saveDataHandler = (enteredExpenseData) =>{

        const expenseData1 = {
            ...enteredExpenseData,
            id:Date.now()

        }
        
        props.transferData(expenseData1);
        onclicked(false);

    }

    const onClickHandler = ()=>{
        onclicked(true);
    }

    const onCancelHandler=()=>{
        onclicked(false);
    }

    return(
        <div className="new-expense"> 
        {!clicked && <button onClick={onClickHandler}>Add expenses</button>}
        {clicked && <ExpenseForm onSaveData={saveDataHandler}  onCancel ={onCancelHandler}  />}
           
        </div>

    );
}

export default NewExpenses;