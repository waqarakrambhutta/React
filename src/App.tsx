import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
// we used interface for looking fields easily in the .then() function.

function App() {
  const [Users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...Users];
    setUsers(Users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const addUser = () => {
    const originalUser = [...Users];
    const newUser = { id: 0, name: "waqar" };
    setUsers([newUser, ...Users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...Users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User)=>{
    const originalUser =  [...Users]
    const updatedUser = {...user,name: user.name + '!'}
    setUsers(Users.map(u=>u.id===user.id ? updatedUser: u))

    axios.patch("https://jsonplaceholder.typicode.com/users"+ user.id, updatedUser)
    .catch(err=>{
      setError(err.message)
      setUsers(originalUser)
  })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {Users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                deleteUser(user);
              }}
            >
              Delete
            </button>
            <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
