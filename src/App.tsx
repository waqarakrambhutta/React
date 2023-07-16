import { useState } from "react";

function App() {
      
  const [drink,setdrink]=useState({
    title:'Pakistan',
    price:5
  })

  const handleClick=()=>{
    setdrink({...drink, price:6})
  }
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
export default App;
