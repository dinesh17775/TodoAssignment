import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

function TodosList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className=" bg-slate-400 h-auto mt-4 w-[700px]">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
export default TodosList;
