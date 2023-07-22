import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpense] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 70, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 45, category: "Utilities" },
    { id: 4, description: "ddd", amount: 90, category: "Utilities" }
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) return null;
  return (
    <div>
      <div className="mb-5">
      <ExpenseForm onSubmit={expense=>setExpense([...expenses,{...expense,id:expenses.length +1}])}/>
      </div>
      <ExpenseFilter
        onSelectCatagory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
