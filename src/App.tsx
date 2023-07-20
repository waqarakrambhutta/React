import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";





function App() {



  const [expense,setexpense] =useState([
    {id:1,description:'aaa',amount:10,catagory:'Utilities'},
    {id:2,description:'bbb',amount:70,catagory:'Entertaimet'},
    {id:3,description:'ccc',amount:45,catagory:'Utilities'},
    {id:4,description:'ddd',amount:90,catagory:'Utilities'}
  ])

  
 if (expense.length === 0) return null;
  return (
    <div>
     <ExpenseList expenses={expense} onDelete={(id)=>setexpense(expense.filter(e=>e.id!==id))}/>
    </div>
  );
}
export default App;
