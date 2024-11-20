import React from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold underline text-blue-500 mb-4">
        Todo App
      </h1>
      <Form />
      <List />
    </div>
  );
};

export default App;
