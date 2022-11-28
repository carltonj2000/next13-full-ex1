import { Suspense } from "react";
import Users from "./users";
import Companies from "./companies";

export default function Dashboard() {
  return (
    <div>
      <h1 className="bold text-2xl">Dashboard</h1>
      <div className="flex justify-center gap-3">
        <Suspense fallback={<div>Loading Users</div>}>
          <Users />
        </Suspense>
        <Suspense fallback={<div>Loading Companies</div>}>
          <Companies />
        </Suspense>
      </div>
    </div>
  );
}
