import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faStar,
  faCalendarDay,
  faCheck,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../features/authSlice";
import { NavLink } from "react-router-dom";
import userImg from "../img/image.png";

export default function SideNav() {
  const dispatch = useDispatch(); // Initialize dispatch
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.task.tasks);

  // Filter tasks that are due today
  const todaysTasks = tasks.filter((task) => {
    const taskDate = new Date(task.id);
    const today = new Date();
    return taskDate.toDateString() === today.toDateString();
  });

  // Filter important tasks
  const importantTasks = tasks.filter((task) => task.important === true);

  return (
    <div className="h-screen w-64 bg-gray-200 flex flex-col justify-center items-center">
      <div className="items-center w-[90%] rounded-xl  bg-[#f0f6f0] shadow-lg  flex flex-col justify-between">
        {/* User Profile Section */}
        <div className="flex flex-col items-center space-x-4 pb-6 border-b">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mt-4">
            {/* <FontAwesomeIcon icon={faUser} className="text-gray-800 text-2xl" /> */}
            <img src={userImg} alt="" className="text-gray-800 text-2xl rounded-full h-20 w-20" />
          </div>
          <div className="flex flex-row text-center">
            <span className="font-medium text-gray-800">
              Hey,&nbsp;
              <span className="text-lg font-bold text-gray-900">
                {user.username}
              </span>
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex-grow bg-white py-6 space-y-4 w-[90%] rounded-xl">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive
                      ? "bg-green-300"
                      : "hover:bg-green-50 text-green-800"
                  }`
                }
              >
                All Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/today"
                className={({ isActive }) =>
                  `block p-2 rounded  ${
                    isActive
                      ? "bg-green-300"
                      : "hover:bg-green-50 text-green-800"
                  }`
                }
              >
                Today
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/important"
                className={({ isActive }) =>
                  `block p-2 rounded  ${
                    isActive
                      ? "bg-green-300"
                      : "hover:bg-green-50 text-green-800"
                  }`
                }
              >
                Important
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completed"
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive
                      ? "bg-green-300"
                      : "hover:bg-green-50 text-green-800"
                  }`
                }
              >
                Completed
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Today's Tasks Summary */}
        <div className="py-6 border-t border-b bg-white w-[90%] rounded-xl flex flex-col items-center space-y-2">
          <h3 className="text-lg font-bold text-gray-900">Today's Tasks</h3>
          <div className="mt-2 text-3xl font-bold text-green-600">
            {todaysTasks.length - tasks.filter((task) => task.completed).length}
          </div>
          <p className="text-sm text-gray-600">tasks remaining</p>
        </div>

        {/* Logout Button */}
        <div className="pt-6 w-[90%] m-3">
          <button
            onClick={() => dispatch(logout())} // Add logout functionality
            className="w-full flex items-center justify-center space-x-3 
          bg-red-50 text-red-600 py-3 px-4 rounded-lg
          hover:bg-red-100 hover:text-red-700 hover:shadow-md
          active:bg-red-200 active:transform active:scale-95
          transition-all duration-200 ease-in-out
          border border-red-100"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
