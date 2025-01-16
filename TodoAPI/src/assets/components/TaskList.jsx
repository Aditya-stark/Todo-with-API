import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  toggleTaskCompletion,
  fetchWeather,
  toggleTaskImportance,
} from "../../features/taskSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 * TaskList component styled with Tailwind CSS.
 * The functionality is preserved as per the original version.
 */

export default function TaskList() {
  const tasks = useSelector((state) => state.task.tasks);
  const weather = useSelector((state) => state.task.weather);
  const dispatch = useDispatch();

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  useEffect(() => {
    pendingTasks.forEach((task) => {
      if (task.city) {
        dispatch(fetchWeather(task.city));
      }
    });
  }, [dispatch, pendingTasks]);

  const renderWeather = (city) => {
    const weatherData = weather[city];
    if (!weatherData) return null;
    return (
      <span className="ml-2 text-sm text-gray-500">
        {weatherData.current.temp_c}°C - {weatherData.current.condition.text}
      </span>
    );
  };

  const renderPriority = (priority) => {
    if (priority === "High") {
      return <i className="fas fa-star text-yellow-500"></i>;
    }
    return null;
  };

  return (
    <div className="h-full mx-auto p-6 bg-gray-50">
      {/* Pending Tasks Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Pending Tasks</h2>
      {pendingTasks.length === 0 ? (
        <p className="text-gray-500">No Pending Tasks</p>
      ) : (
        <div className="">
          {pendingTasks.map((task) => (
            // Task Item
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                {renderPriority(task.priority)}
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
          ))}
        </div>
      )}

      {/* Completed Tasks Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
        Completed Tasks
      </h2>
      {completedTasks.length === 0 ? (
        <p className="text-gray-500">No Completed Tasks</p>
      ) : (
        <div className="space-y-4">
          {completedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                {/* Check Mark */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    dispatch(toggleTaskCompletion({ id: task.id }))
                  }
                  className="mr-2 w-5 h-5" // Increased size of the checkbox
                />
                {renderPriority(task.priority)}
                {/* Task Name */}
                <span className="line-through text-gray-500 font-medium">
                  {task.task}
                </span>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => dispatch(deleteTask({ id: task.id }))}>
                  <FontAwesomeIcon icon={faTrash} className="text-red-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
