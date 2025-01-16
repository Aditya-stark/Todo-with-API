import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";
import { toggleTaskImportant } from "../../features/taskSlice"; // Import the toggleTaskImportant action

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="task-item flex items-center justify-between p-3 rounded-lg bg-white shadow-md mb-2">
      <div className="flex items-center space-x-3">
        {/* Star icon to mark task as important */}
        <FontAwesomeIcon
          icon={faStar}
          className={`cursor-pointer ${task.important ? "text-yellow-500" : "text-gray-400"}`}
          onClick={() => dispatch(toggleTaskImportant({ id: task.id }))}
        />
        {/* Task title */}
        <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
          {task.title}
        </span>
      </div>
      {/* Check icon to mark task as completed */}
      <FontAwesomeIcon icon={faCheck} className={`cursor-pointer ${task.completed ? "text-green-500" : "text-gray-400"}`} />
    </div>
  );
}
