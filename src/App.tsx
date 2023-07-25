import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}
// we used interface for looking fields easily in the .then() function.

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error,setError] = useState('')

  useEffect(() => {
    const fetchUser = async()=>{
      try
      {
        const res = await axios
         .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
        setUsers(res.data)}
        catch (err){
          setError((err as AxiosError).message)
        }
    }
    fetchUser();
//get => await promise -> response / error
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
