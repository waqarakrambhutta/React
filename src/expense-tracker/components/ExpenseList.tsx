import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  catagory: string;
}

interface props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: props) => {
    
  return (
    <table className="table tableborder">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Catagory</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.catagory}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
            <td>Total</td>
            <td>{expenses.reduce((acc,expense)=> expense.amount +acc,0).toFixed(2)}</td>
        </tr>

      </tfoot>
    </table>
  );
};

export default ExpenseList;
