import React from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './taskInput';
import TaskList from './TaskList';
import Login from './Login';

function MainContent() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex-1 flex flex-col">
      {isAuthenticated ? (
        <div className="flex flex-1 flex-col todo-container">
          <TaskInput />
          <TaskList />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default MainContent;
