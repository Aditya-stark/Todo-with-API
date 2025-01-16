import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/taskSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const [important, setImportant] = useState(false);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handelAddTask = () => {
    if (task && city) {
      dispatch(addTask({ id: Date.now(), task, important, city }));
      setTask("");
      setCity("");
    }
  };

  return (
    <div className="task-input bg-gray-100 p-4 rounded-md shadow-md">
      {/* Task Input */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add A Task"
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* City Input */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="flex justify-between items-center">
        {/* Important */}
        <div className="important flex items-center">
          <label
            htmlFor="important-task"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="important-task"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
              className="hidden"
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`text-2xl ${
                important ? "text-yellow-500" : "text-gray-400"
              }`}
            />
          </label>
        </div>

        {/* Add Task Button */}
        <button
          onClick={handelAddTask}
          className="p-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
