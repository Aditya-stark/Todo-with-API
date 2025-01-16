import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import TaskInput from "./assets/components/taskInput";
import TaskList from "./assets/components/TaskList";
import Login from "./assets/components/Login";

import "./App.css";
import SideNav from "./assets/components/SideNav";
import Header from "./assets/components/Header";

function TodoApp() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="App flex flex-col">
      <Header className="w-full" toggleSideNav={toggleSideNav} />
      <div className="flex flex-1">
        {isAuthenticated && isSideNavOpen && <SideNav className="fixed" />}
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
