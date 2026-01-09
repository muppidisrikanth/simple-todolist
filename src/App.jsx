import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // add code mawa
  const addTodo = () => {
    if (!task.trim()) return;

    setTodos((prevTodos) => [...prevTodos, task]);
    setTask("");
  };

  // delete code mawa
  const deleteTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, i) => i !== index)
    );
  };

  // clear all code mawa 
  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1>TodoList</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default App;
