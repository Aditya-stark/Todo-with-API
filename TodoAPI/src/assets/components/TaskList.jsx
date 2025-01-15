import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  toggleTaskCompletion,
  fetchWeather,
} from "../../features/taskSlice";

/**
 * TaskList component that displays a list of tasks categorized into pending and completed.
 *
 * This component uses Redux hooks to access the state and dispatch actions.
 *
 * @component
 * @example
 * // Example usage:
 * // <TaskList />
 *
 * @returns {JSX.Element} The rendered component displaying pending and completed tasks.
 *
 * @description
 * - Fetches tasks from the Redux store using `useSelector`.
 * - Filters tasks into pending and completed categories.
 * - Renders pending tasks with options to mark as done or delete.
 * - If no pending tasks are available, displays a message indicating so.
 *
 * @function
 * @name TaskList
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
      <span className="weather-info">
        {weatherData.current.temp_c}°C - {weatherData.current.condition.text}
      </span>
    );
  };

  return (
    <div className="task-list">
      <h2>Pending Tasks</h2>
      {pendingTasks.length === 0 ? (
        <p>No Pending Tasks</p>
      ) : (
        pendingTasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>
              {task.task} ({task.priority}) - {task.city}
            </span>
            {renderWeather(task.city)}
            <button onClick={() => dispatch(toggleTaskCompletion({ id: task.id }))}>
              Mark as Done
            </button>
            <button onClick={() => dispatch(deleteTask({ id: task.id }))}>
              Delete
            </button>
          </div>
        ))
      )}

      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p>No Completed Tasks</p>
      ) : (
        completedTasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>
              {task.task} ({task.priority}){" "}
            </span>
            <button
              onClick={() => dispatch(toggleTaskCompletion({ id: task.id }))}
            >
              Mark as Pending
            </button>
            <button onClick={() => dispatch(deleteTask({ id: task.id }))}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}