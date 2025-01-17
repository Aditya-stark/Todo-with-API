import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import store from "./store";
import MainTasks from "./assets/components/TaskViews/MainTasks";
import TodayTasks from "./assets/components/TaskViews/TodayTasks";
import ImportantTasks from "./assets/components/TaskViews/ImportantTasks";
import CompletedTasks from "./assets/components/TaskViews/CompletedTasks";
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

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="App flex flex-col">
      <Header className="w-full" toggleSideNav={toggleSideNav} />
      <div className="flex flex-1">
        {isSideNavOpen && <SideNav className="fixed" />}
        <div className="flex-1">
          <Routes>
            <Route path="/tasks" element={<MainTasks />} />
            <Route path="/today" element={<TodayTasks />} />
            <Route path="/important" element={<ImportantTasks />} />
            <Route path="/completed" element={<CompletedTasks />} />
            <Route path="/" element={<Navigate to="/tasks" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <TodoApp />
      </Router>
    </Provider>
  );
}

export default App;
