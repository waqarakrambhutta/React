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

  useEffect(() => {
    // here is the concept of promises understand it
    // also log this on browser and see the type of data

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setusers(response.data));
  });

  return <ul>
    {users.map(user=><li key={user.id}>{user.name}</li>)}
  </ul>
}
export default App;
