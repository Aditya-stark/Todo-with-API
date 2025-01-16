import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBorderAll,
  faList,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({ toggleSideNav }) {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isGridView, setIsGridView] = useState(true);

  const toggleLayout = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div
      className={`w-full flex items-center justify-between px-4 py-2 ${
        isNightMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        {/* Left: Menu Icon */}
        <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer hover:text-gray-500"
          onClick={toggleSideNav}
        />
        {/* <img src={logo} alt="logo" className="h-8" /> */}
        <p>Logo</p>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer hover:text-gray-500"
        />

        {/* Layout Toggle */}
        <FontAwesomeIcon
          icon={isGridView ? faBorderAll : faList}
          onClick={toggleLayout}
          className="cursor-pointer hover:text-gray-500"
        />

        {/* Night Mode */}
        <FontAwesomeIcon
          icon={isNightMode ? faMoon : faSun}
          onClick={() => setIsNightMode(!isNightMode)}
          className="cursor-pointer hover:text-gray-500"
        />
      </div>
    </div>
  );
}
