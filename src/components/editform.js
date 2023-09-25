import React, { useState } from "react";

const Editform = ({ task, editTask }) => {
  const [taskName, setTaskName] = useState(task.task);
  const [details, setdetails] = useState(task.details);
  const [notes, setNotes] = useState(task.notes);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handledetailsChange = (e) => {
    setdetails(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(taskName, details, notes, task.id);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label style={{ color: "white" }}>
          <b>Task:</b>
        </label>
        <input
          type="text"
          name="task"
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder="Update Task"
        />
        <label style={{ color: "white" }}>
          <b>details:</b>
        </label>
        <input
          type="text"
          name="details"
          value={details}
          onChange={handledetailsChange}
          placeholder="Update details"
        />
        <label style={{ color: "white" }}>
          <b>Notes:</b>
        </label>
        <input
          type="text"
          name="notes"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Update Notes"
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default Editform;
