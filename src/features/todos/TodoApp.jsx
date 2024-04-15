import AddTodoForm from "./AddTodoForm";
import TodosList from "./TodosList";

function TodoApp() {
  return (
    <div className="w-[1200px] border-2 border-solid border-red-400  h-3/6 flex flex-col items-center text-center">
      <h1 className=" text-3xl font-bold">Todo App</h1>
      <div className="w-full flex flex-col justify-center items-center">
        <AddTodoForm />
        <TodosList />
      </div>
    </div>
  );
}
export default TodoApp;
