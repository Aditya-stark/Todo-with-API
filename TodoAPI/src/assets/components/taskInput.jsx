import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/taskSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPersonHiking } from "@fortawesome/free-solid-svg-icons";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const [important, setImportant] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handelAddTask = () => {
    if (task && (!outdoor || city)) {
      dispatch(addTask({ id: Date.now(), task, important, outdoor, city }));
      setTask("");
      setCity("");
      setOutdoor(false);
      setImportant(false);
    }
  };

  return (
    <div className="task-input bg-gray-200 p-4  shadow-md w-full">
      {/* Task Input */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add A Task"
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* City Input */}
      {outdoor && (
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      )}

      <div className="flex justify-between items-center">
        {/* Outdoor Checkbox */}
        <div className="flex items-center justify-center space-x-2">
          <div className="outdoor flex items-center">
            <label
              htmlFor="outdoor-task"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="outdoor-task"
                checked={outdoor}
                onChange={(e) => setOutdoor(e.target.checked)}
                className="hidden"
              />
              {/* <span>Outdoor?</span> */}
              <FontAwesomeIcon
                icon={faPersonHiking}
                className={`text-2xl ${
                  outdoor ? "text-green-500" : "text-gray-400"
                }`}
              />
            </label>
          </div>

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
              {/* <span>Important?</span> */}
              <FontAwesomeIcon
                icon={faStar}
                className={`text-xl ${
                  important ? "text-yellow-500" : "text-gray-400"
                }`}
              />
            </label>
          </div>
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
