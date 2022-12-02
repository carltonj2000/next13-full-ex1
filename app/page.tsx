import TodoAdd from "./todo-add";
import TodoList from "./todo-list";

export default function Page() {
  return (
    <div className="mt-4">
      <TodoAdd />
      <TodoList />
    </div>
  );
}
