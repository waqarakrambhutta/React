import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";


function App() {
  const [selectedCatagory, setSelectedCatagory] = useState("");

  const [expenses, setexpense] = useState([
    { id: 1, description: "aaa", amount: 10, catagory: "Utilities" },
    { id: 2, description: "bbb", amount: 70, catagory: "Entertainment" },
    { id: 3, description: "ccc", amount: 45, catagory: "Utilities" },
    { id: 4, description: "ddd", amount: 90, catagory: "Utilities" },
  ]);

  const visibleExpenses = selectedCatagory
    ? expenses.filter((e) => e.catagory === selectedCatagory)
    : expenses;

  if (expenses.length === 0) return null;
  return (
    <div>
      <ExpenseForm></ExpenseForm>
      <ExpenseFilter
        onSelectCatagory={(catagory) => setSelectedCatagory(catagory)}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setexpense(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
