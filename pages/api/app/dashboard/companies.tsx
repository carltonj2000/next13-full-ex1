import { use } from "react";

async function getCompanies() {
  //let companies = await fetch("https://dummyjson.com/companies");
  const companies = await fetch("http://localhost:3001/companies");
  return companies.json();
}

export default function Companies() {
  const companies = use(getCompanies());
  return (
    <div>
      <h2 className="bold text-xl">Companies</h2>
      <ul>
        {companies.map(({ id, company }) => (
          <li key={id}>{company}</li>
        ))}
      </ul>
    </div>
  );
}
