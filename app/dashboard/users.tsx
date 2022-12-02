import { use } from "react";

async function getUsers() {
  const users = await fetch("http://localhost:3000/api/users");
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
