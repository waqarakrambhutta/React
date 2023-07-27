import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import apiClient, { CanceledError } from "./services/api-client";

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
    apiClient
      .get<User[]>("/users", {
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

    apiClient.delete("/users" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = [...Users];
    const newUser = { id: 0, name: "waqar" };
    setUsers([newUser, ...Users]);

    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...Users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...Users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(Users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch("/users" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

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
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
