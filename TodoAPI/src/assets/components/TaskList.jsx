import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
} from "../../features/taskSlice";
import TaskCard from "./TaskCard";
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

  return (
    <div className=" mx-auto bg-gray-200 h-[80vh] w-full">
      {/* Pending Tasks Section */}
      <div className=" h-1/2">
        <h3 className="text-xl font-bold text-gray-800  p-1">Pending Tasks</h3>
        {pendingTasks.length === 0 ? (
          <p className="text-gray-500">No Pending Tasks</p>
        ) : (
          <div className="h-[80%] p-2 overflow-y-auto">
            {pendingTasks.map((task) => (
              <TaskCard key={task.id} task={task} renderWeather={renderWeather} />
            ))}
          </div>
        )}
      </div>

      {/* Completed Tasks Section */}
      <div className="h-1/2">
        <h3 className="text-xl font-bold text-gray-800 pl-1">
          Completed Tasks
        </h3>
        {completedTasks.length === 0 ? (
          <p className="text-gray-500">No Completed Tasks</p>
        ) : (
          <div className="h-[80%] p-2 overflow-y-auto">
            {completedTasks.map((task) => (
              <TaskCard key={task.id} task={task} renderWeather={renderWeather} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
