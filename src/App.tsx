import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const list =['Qasim','Ammar','yousaf','waqar']
  const setSelectedItem = (list:string)=>{
    console.log(list)
  }
  return (
    <div>
      <ListGroup items={list} heading="Brothers" onSelectItem={setSelectedItem}/>

    </div>
  );
}
export default App;
