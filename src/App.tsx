import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
// we used interface for looking fields easily in the .then() function.

function App() {
  const [users, setusers] = useState<User[]>([]);
  const [error,setError] = useState('')

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((response) => setusers(response.data))
      .catch((err)=>setError(err.message));
  });

  return (
  <>
  {error && <p className="text-danger">{error}</p>}
  <ul>
    {users.map(user=><li key={user.id}>{user.name}</li>)}
  </ul>
  </>
  );
}
export default App;
