import { useState } from "react";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            className="flex-grow p-2 border border-blue-500 rounded mr-2"
            placeholder="Add a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
