/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "./todosSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SingleTodo({ id, title, completed }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <input
        type="checkbox"
        onClick={() => dispatch(toggleCompleted({ id: id }))}
      />
      <p
        className={`${
          completed ? "line-through" : ""
        } text-center w-28 overflow-hidden overflow-ellipsis whitespace-nowrap`}
        style={{ textOverflow: "ellipsis" }}
      >
        {title}
      </p>
      <button
        onClick={() => {
          dispatch(removeTodo({ id: id }));
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

export default SingleTodo;
