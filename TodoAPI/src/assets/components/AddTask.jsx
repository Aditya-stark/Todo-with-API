import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/taskSlice";

// AddTask component
export default function AddTask() {
  // State for task title and priority
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now().toString(), title, priority }));
    setTitle("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Input for task title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="p-2 border rounded"
        required
      />
      {/* Select for task priority */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {/* Button to add task */}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
}
