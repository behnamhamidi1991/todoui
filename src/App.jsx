import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: uuidv4(), title, done: false }]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleDone = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold underline text-blue-500 mb-4">
        Todo App
      </h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </div>
  );
};

export default App;
