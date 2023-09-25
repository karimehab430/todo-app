import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div>
      <div className="Todo">
        <div>
          <label>Task:</label>
          <p
            className={`${task.completed ? "completed" : ""}`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.task}
          </p>
        </div>
        <div>
          <label>details:</label>
          <p>{task.details}</p>
        </div>
        <div>
          <label>Notes:</label>
          <p>{task.notes}</p>
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