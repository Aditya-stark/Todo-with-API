//A Div containing a input field and a button to add task
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/taskSlice";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handelAddTask = () => {
    if (task && city) {
      dispatch(addTask({ id: Date.now(), task, priority, city }));
      setTask("");
      setCity("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handelAddTask}>Add Task</button>
    </div>
  );
}