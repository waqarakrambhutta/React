import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {

  
  const [game,setGame] = useState({
    id:1,
    player:{
      name:'john'
    }
  })

  const handleClick = ()=>{
    setGame({...game,player:{...game.player,name:'waqar'}})
  }
  
  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default App;
