import { useState } from "react";


function App() {
  const [bugs,setbugs] = useState([
    {id:1,title:'Bug 1',fixed:false},
    {id:2,title:'Bug 2',fixed:false}
  ]);

  const handleClick = () => {
    setbugs(bugs.map(bug=>bug.id === 1 ? {...bug,fixed:true}: bug))
  };
  return (
    <div>
        <h1>Title: {bugs[0].title}</h1>
        <p>Fixed: {bugs[0].fixed.toString()}</p>
        <button onClick={handleClick}>Click me</button>

    </div>
  );
}
export default App;
