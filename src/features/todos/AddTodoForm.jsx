import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

// prepare

function AddTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="w-2/3">
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-2/3 h-full rounded-md p-3 border-2 border-solid border-black "
      />
      <button type="submit" className=" px-8 py-3 rounded-md ml-4 bg-slate-500">
        Add
      </button>
    </form>
  );
}
export default AddTodoForm;
