"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

async function addTodo(name: string) {
  await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function TodoAdd() {
  const [name, nameSet] = useState("");
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <p className="mr-2">Todo Item</p>
      <input
        type="text"
        value={name}
        onChange={(e) => nameSet(e.target.value)}
      />
      <button
        className="border border-slate-100 ml-2 px-3 py-1 rounded"
        value={name}
        onClick={async () => {
          await addTodo(name);
          nameSet("");
          router.refresh();
        }}
      >
        Add
      </button>
    </div>
  );
}
