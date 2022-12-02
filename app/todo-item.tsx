"use client";
import { useRouter } from "next/navigation";
import { TODO } from "../utils/db";

async function updateTodo(todo: TODO) {
  await fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function deleteTodo(todo: TODO) {
  await fetch(`/api/todos/${todo.id}`, {
    method: "DELETE",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function TodoItem({ todo }: { todo: TODO }) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        className="mr-2"
        onChange={async () => {
          await updateTodo(todo);
          router.refresh();
        }}
        checked={todo.isDone}
      />
      {todo.name}
      <button
        className="ml-3 border border-slate-100 rounded-md py-1 px-3"
        onClick={async () => {
          await deleteTodo(todo);
          router.refresh();
        }}
      >
        Delete
      </button>
    </>
  );
}
