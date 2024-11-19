"use client";

import { useState } from "react";

interface Todo {
  id: number;
  task: string;
}

const TodoApp = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), task };
    setTodos([...todos, newTask]);
    setTask("");
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="grid place-items-center h-screen bg-black">
      <div className="space-y-10">
        <input
          className="block leading-10 rounded-2xl w-96 px-4 py-2"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />

        <button
          onClick={addTask}
          disabled={!task}
          className="bg-gray-600 px-6 py-4 text-white font-bold rounded-2xl text-2xl"
        >
          Add Task
        </button>
      </div>
      <ul className="font-normal text-xl space-y-5 ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-600 text-white px-4 py-2 rounded-2xl w-[400px] flex justify-between items-center"
          >
            {todo.task}
            <span><button
              onClick={() => deleteTask(todo.id)}
              className="bg-red-600 rounded-lg text-xl h-9 w-16 text-white"
            >
              Delete
            </button></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
