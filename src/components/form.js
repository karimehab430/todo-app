import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [details, setdetails] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo({
        task: task,
        details: details,
        notes: notes,
      });
      setTask("");
      setdetails("");
      setNotes("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{color:"white"}}><b>Task</b></label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What is the task of the day?"
        />
        <label style={{color:"white"}}><b>Details (optional)</b></label>
        <textarea
          type="text"
          value={details}
          onChange={(e) => setdetails(e.target.value)}
          placeholder="Details"
          style={{height:"100px"}}
        />
        <label style={{color:"white"}}><b>Notes (optional)</b></label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
        />
       
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Form;
