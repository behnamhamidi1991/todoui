import React from "react";

const List = () => {
  return (
    <ul className="space-y-2">
      <li className="flex items-center justify-between p-2 border rounded bg-white">
        <span className="flex-grow">Sample Task</span>
        <button className="bg-blue-500 text-white p-1 rounded mr-2">
          Done
        </button>
        <button className="bg-red-500 text-white p-1 rounded">Delete</button>
      </li>
      {/* Add more list items as needed */}
    </ul>
  );
};

export default List;
