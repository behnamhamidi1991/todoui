const List = ({ todos, deleteTodo, toggleDone }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-2 border rounded ${
            todo.done ? "bg-blue-100" : "bg-white"
          }`}
        >
          <span className={`flex-grow ${todo.done ? "line-through" : ""}`}>
            {todo.title}
          </span>
          <button
            onClick={() => toggleDone(todo.id)}
            className="bg-blue-500 text-white p-1 rounded mr-2"
          >
            {todo.done ? "Undo" : "Done"}
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white p-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
