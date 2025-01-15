import React from "react";
import store from "./store";
import TaskInput from "./assets/components/taskInput";
import TaskList from "./assets/components/TaskList";

import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
