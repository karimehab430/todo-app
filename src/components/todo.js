import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleTodoClick = () => {
    toggleComplete(task.id);
  };
  return (
    <div>
      <div className="Todo" >
        <div>
          <label>Task:</label>
          <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
        </div>
        <div>
          <label>Details:</label>
          <p className={`${task.completed ? "completed" : ""}`}>
            {task.details}
          </p>
        </div>
        <div>
          <label>Notes:</label>
          <p className={`${task.completed ? "completed" : ""}`}>{task.notes}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
