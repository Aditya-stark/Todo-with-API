import React from 'react';
import { useSelector } from 'react-redux';
import TaskInput from '../taskInput';
import TaskList from '../TaskList';

function MainTasks() {
  const loading = useSelector(state => state.task.loading);
  const error = useSelector(state => state.task.error);

  return (
    <div className="flex flex-1 flex-col todo-container">
      <TaskInput />
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500" />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-4">{error}</div>
      ) : (
        <TaskList filter="all" />
      )}
    </div>
  );
}

export default MainTasks;
