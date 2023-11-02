import React, { useState } from "react";

const Users = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleComponent = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    setShowComponent(!showComponent);
  };
  return (
    <>
      <button onClick={toggleComponent}>
        {showComponent ? "hide users" : "show users"}
      </button>

      <ul>
        {showComponent &&
          users.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ul>
    </>
  );
};

export default Users;
