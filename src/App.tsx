import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {

  const [cartItem,setCartItem] = useState(['product1','product2'])
  
  return (
    <div>
       <NavBar cartItemCount={cartItem.length}/>
       <Cart cartItems={cartItem} onClose={()=>{setCartItem([])}}/>
    </div>
  );
}
export default App;
