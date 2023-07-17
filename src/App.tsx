import { useState } from "react";

function App() {
  const [we, us] = useState(['ammar','qasim','yousaf']);

  const handleClick = () => {
    // adding item to array.
    us([...we,'waqar'])
    // remove
    us(we.filter(tag => tag !== 'yousaf'))
    //updating
    us(we.map(tag=>tag === 'yousaf'? 'waqar': tag))

  };
  return (
    <div>for 
      {we}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
export default App;
