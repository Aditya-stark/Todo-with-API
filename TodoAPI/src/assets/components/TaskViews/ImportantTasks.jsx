import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../TaskCard';
import WeatherInfo from '../WeatherInfo';

function ImportantTasks() {
  const tasks = useSelector((state) => state.task.tasks);
  
  // Filter important tasks
  const importantTasks = tasks.filter(task => task.important === true);

  // Weather rendering function
  const renderWeather = (city) => {
    return city ? <WeatherInfo city={city} /> : null;
  };

  return (
    <div className="flex flex-1 flex-col todo-container p-4">
      <h2 className="text-2xl font-bold mb-4">Important Tasks</h2>
      <div className="space-y-2">
        {importantTasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No important tasks</p>
        ) : (
          importantTasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              renderWeather={renderWeather}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ImportantTasks;
