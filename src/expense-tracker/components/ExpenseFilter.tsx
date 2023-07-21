import React from 'react'

interface props {
  onSelectCatagory:(catagory:string)=>void
}

const ExpenseFilter = ({onSelectCatagory}:props) => {
  return (
    <div>
        <select className='form-select' onChange={(event)=>onSelectCatagory(event.target.value)}>
            <option value="">All Catagories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilites</option>
            <option value="Entertainment">Entertainment</option>
        </select>
    </div>
  )
}

export default ExpenseFilter