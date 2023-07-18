import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {

  
  const [cart,setCart] = useState({
    discount:.1,
    items:
    [
      {id:1, title:'product1',quantity:1},
      {id:2,title:'product2',quantity:1}  
  ]

  })
  

  const handleClick = ()=>{
    setCart({...cart,items: cart.items.map(item => item.id === 1 ? {...item,quantity:2} : item)})
  }
  
  return (
    <div>
      {cart.items[0].quantity}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default App;
