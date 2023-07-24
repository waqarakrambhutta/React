import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {

  const [category,setcategory]=useState('')

  return (
    <div>
      <select className="form-control" onChange={(event)=>setcategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}/>
    </div>
  );
}
export default App;
