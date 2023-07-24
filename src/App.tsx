import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {

  const [category,setcategory]=useState('')

  const connect = ()=> {console.log('Connecting');}
  const disconnect = ()=> {console.log('disconnecting');}

  useEffect(()=>{
    connect();
    return ()=>{disconnect()}
  })

  return (
    <div></div>
  );
}
export default App;
