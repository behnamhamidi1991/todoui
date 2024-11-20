import React from "react";

const Form = () => {
  return (
    <form className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          className="flex-grow p-2 border border-blue-500 rounded mr-2"
          placeholder="Add a new task"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
