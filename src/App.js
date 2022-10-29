import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <button type="submit">Add User</button>
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
