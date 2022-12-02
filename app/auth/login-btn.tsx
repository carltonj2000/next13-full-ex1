"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import UserInfo from "./user-info";

export default function Component({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <UserInfo data={session.user} />
        <button
          className="mt-2 py-1 px-3 border border-slate-100 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        {children}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="mt-2 py-1 px-3 border border-slate-100 rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
