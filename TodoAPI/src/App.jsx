import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import TaskInput from "./assets/components/taskInput";
import TaskList from "./assets/components/TaskList";
import Login from "./assets/components/Login";
import { logout } from "./features/authSlice";

import "./App.css";
import SideNav from "./assets/components/SideNav";

function TodoApp() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // This will handle all localStorage clearing
  };

  return (
    <div className="App">
      {isAuthenticated && <SideNav />}
      <div className="bg-slate-600 w-[100%] ">
        {/* //Header comes here */}
        {isAuthenticated ? (
          <div className="todo-container">
            <TaskInput />
            <TaskList />
          </div>
        ) : (
          <Login />
        )}
      </div>
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
