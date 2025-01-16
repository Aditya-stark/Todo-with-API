import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteTask,
  toggleTaskCompletion,
  toggleTaskImportance,
} from "../../features/taskSlice";

export default function TaskCard({ task, renderWeather }) {
  const dispatch = useDispatch();

  return (
    <div
      key={task.id}
      className="flex items-center justify-between p-4 bg-white border border-b-2 shadow-sm"
    >
      <div className="flex items-center space-x-4">
        <span className="text-gray-800 font-medium flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              dispatch(toggleTaskCompletion({ id: task.id }))
            }
            className="mr-2 w-5 h-5" // Increased size of the checkbox
          />
          {task.task}
        </span>
        <span className="text-gray-500 text-sm">{task.city}</span>
        {renderWeather(task.city)}
      </div>
      <div className="flex space-x-2 items-center">
        <FontAwesomeIcon
          icon={faStar}
          className={`cursor-pointer ${
            task.important ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() =>
            dispatch(toggleTaskImportance({ id: task.id }))
          }
        />
        <button onClick={() => dispatch(deleteTask({ id: task.id }))}>
          <FontAwesomeIcon icon={faTrash} className="text-red-700" />
        </button>
      </div>
    </div>
  );
}
