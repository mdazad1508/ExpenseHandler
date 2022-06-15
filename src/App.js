import React,{useState} from "react";

import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses"




const expenses = [
  {
    id: '1',
    title: 'Electricity bill',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: '3',
    title: 'School fees',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'Health insurance',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [prevData,updatedData] = useState(expenses)

  const tansferDataHandler=(data)=>{

     // or updatedData([...expenses,data]);
    

    updatedData(prevexpense => {
      return [data,...prevexpense];
    });
    
  }




  return (
    <div>
  
   
    <NewExpenses transferData ={tansferDataHandler} />
    <Expenses items ={prevData}></Expenses>
    <div className="footer">
    <p style={{color:"black"}} >created with react @azad </p>
    </div>
    </div>
  
    
  );
}

export default App;

