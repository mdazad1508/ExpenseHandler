import React ,{ useState} from "react";


import "./ExpenseForm.css";

function ExpenseForm(props){

   const [enteredTitle,setEnteredTitled ] = useState("");
    const [enteredAmount,setEnteredAmount ] = useState("");
   const [enteredDate,setEnteredDate ] = useState("");
   
   // multiple state alternative

    // const [userInput ,setUserInput] = useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""

    // })

    const titleChangeHandler = function(event){
       setEnteredTitled(event.target.value);

       //or

    //    setUserInput({
    //         enteredTitle:event.target.value,
    //        ...userInput
           
    //    })

      //or 


     //if your current state depends on previous state you this method.. rememver it below
     //remember this .. you have to use this...


    //    setUserInput((prevState)=>{
    //     return{...prevState,enteredTitle:event.target.value}
    // })
        
    }
    const amountChangeHandler = function(event){
        setEnteredAmount(event.target.value);

        //or 

    //     setUserInput({
    //         enteredAmount:event.target.value,
    //        ...userInput
           
    //    })

   
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredAmount:event.target.value}
    // })


    }
    const dateChangeHandler = function(event){
        setEnteredDate(event.target.value);
    //     setUserInput({
    //         enteredDate:event.target.value,
    //        ...userInput
           
    //    })

    //    setUserInput((prevState)=>{
    //     return{...prevState,enteredDate:event.target.value}
    // })
    }

    const submitHandler = (event)=>{

        event.preventDefault();      // does not refreses the page on submission

        const expensesData = {
            title:enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveData(expensesData);

        setEnteredTitled("");
        setEnteredAmount("");
        setEnteredDate("");


    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                 <label>Title</label>
                 <input type="text" value={enteredTitle}  onChange={titleChangeHandler}  ></input>
              </div>
              <div className="new-expense__control">
                 <label>Amount</label>
                 <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler}  ></input>
              </div>
              <div className="new-expense__control">
                 <label>Date</label>
                 <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate}  onChange={dateChangeHandler} ></input>
              </div>
            </div>
            <div className="new-expense__actions">
                 <button type="button" onClick={props.onCancel}>cancel</button>
                 <button type="submit">Add</button>
            </div>

        </form>
    )


}

export default ExpenseForm;