import React from "react";
import { catagories } from "../../App";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="">
          Amount
        </label>
        <input id="amount" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="dropdown">Catagories</label>
        <select id="dropdown" className="form-select">
          <option value="">All Catagories</option>
          {catagories.map(catagory => (
            <option key={catagory} value={catagory}>
              {catagory}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
