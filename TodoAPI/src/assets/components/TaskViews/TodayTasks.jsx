import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../TaskCard";
import WeatherInfo from "../WeatherInfo";

function TodayTasks() {
  const tasks = useSelector((state) => state.task.tasks);

  // Filter tasks for today
  const todaysTasks = tasks.filter((task) => {
    const taskDate = new Date(task.id);
    const today = new Date();
    return taskDate.toDateString() === today.toDateString();
  });
  return (
    <div className="flex flex-1 flex-col todo-container p-4">
      <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
      <div className="space-y-2">
        {todaysTasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No tasks for today</p>
        ) : (
          todaysTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default TodayTasks;
