"use client"

import { useState } from 'react';

interface Task {
  title: string;
  description: string;
}

const ToDoApp: React.FC = () => {
  const [title, setTitle] = useState<string>(''); 
  const [description, setDescription] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]); // List of tasks

  // Function to handle adding a new task
  const addTask = () => {
    if (title.trim() && description.trim()) { // Ensure both fields are not empty
      setTasks([...tasks, { title, description }]);
      setTitle(''); // Clear title field
      setDescription(''); // Clear description field
    }
  };

  // Function to handle deleting a task
  const deleteTask = (indexToRemove: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Todo List</h2>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a task"
            className="w-full mb-3 border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          onClick={addTask}
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-300 focus:outline-none"
        >
          Add Task
        </button>
        <ul className="space-y-2 mt-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded shadow-sm flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="text-sm px-2 py-1 bg-red-600 text-white rounded hover:bg-red-400 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
