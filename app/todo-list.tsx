import { use } from "react";
import TodoItem from "./todo-item";
import { TODO } from "../utils/db";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3000/api/todos");
  return todos.json();
};

export default function TodoList() {
  const todos = use(getTodos());
  return (
    <div className="flex justify-center mt-4">
      <ul className="flex flex-col items-start gap-2">
        {todos.map((todo: TODO) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
