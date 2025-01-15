import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import TaskInput from "./assets/components/taskInput";
import TaskList from "./assets/components/TaskList";
import Login from "./assets/components/Login";
import { logout } from "./features/authSlice";

import "./App.css";

function TodoApp() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // This will handle all localStorage clearing
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
        {isAuthenticated && (
          <div className="user-info">
            <span>Welcome, {user?.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>
      {isAuthenticated ? (
        <>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
