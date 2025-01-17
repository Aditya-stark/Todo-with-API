import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../TaskCard';
import WeatherInfo from '../WeatherInfo';

function CompletedTasks() {
  const tasks = useSelector((state) => state.task.tasks);
  
  // Filter completed tasks
  const completedTasks = tasks.filter(task => task.completed === true);

  const renderWeather = (city) => {
    return city ? <WeatherInfo city={city} /> : null;
  };

  return (
    <div className="flex flex-1 flex-col todo-container p-4">
      <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>
      <div className="space-y-2">
        {completedTasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No completed tasks</p>
        ) : (
          completedTasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;
