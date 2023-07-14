import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertvisible,setAlertVisible] =useState(false)

  return (
    <div>
    {alertvisible && <Alert children="Warning" onClose={()=>{setAlertVisible(false)}}></Alert>}
      <Button color="warning" onClick={()=> setAlertVisible(true) }>My button</Button>
    </div>
  );
}
export default App;
