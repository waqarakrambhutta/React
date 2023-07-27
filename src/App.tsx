import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
// we used interface for looking fields easily in the .then() function.

function App() {
  const [users, setusers] = useState<User[]>([]);
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
        setusers(response.data);
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
    const orignalUser = [...users];
    setusers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        setError(err.message);
        setusers(orignalUser);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                deleteUser(user);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
