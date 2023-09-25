import React, { useState, useEffect } from "react";
import Form from "./form";
import { v4 as uuidv4 } from "uuid";
import Editform from "./editform";
import Todo from "./todo";
import Header from "./header";
import Footer from "./footer";

const FormWrapper = () => {
  const [todos, setTodos] = useState([]);
  const totalTasks = todos.length;
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo.task,
      details: todo.details,
      notes: todo.notes,
      completed: false,
      isEditing: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const editTask = (task, details, notes, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, task, details, notes, isEditing: false }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="wrapper">
      <Header totalTasks={totalTasks}></Header>
      <Form addTodo={addTodo}></Form>

      {todos.map((todo) =>
        todo.isEditing ? (
          <Editform editTask={editTask} task={todo}></Editform>
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          ></Todo>
        )
      )}
    </div>
  );
};

export default FormWrapper;
