import { use } from "react";

async function getUsers() {
  //let users = await fetch("https://dummyjson.com/users?limit=3");
  let users = await fetch("http://localhost:3001/users");
  return users.json();
}

export default function Users() {
  const users = use(getUsers());
  return (
    <div>
      <h2 className="bold text-xl">Users</h2>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
