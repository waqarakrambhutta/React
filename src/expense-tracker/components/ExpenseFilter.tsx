import React from "react";
import categories from "../categories";


interface props {
  onSelectCatagory: (catagory: string) => void;
}

const ExpenseFilter = ({ onSelectCatagory }: props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectCatagory(event.target.value)}
      >
        <option value=""></option>
        <option value="">All Catagories</option>
        {categories.map((catagory) => (
          <option key={catagory} className="catagory">
            {catagory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
