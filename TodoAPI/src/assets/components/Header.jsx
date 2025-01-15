// A header with logo on Left and on right side there will be search change layout and night mode button

import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isGridView, setIsGridView] = useState(true);

  const toggleLayout = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-right">
        {/* Menu */}
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        {/* Search */}
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />

        {/* Layout */}
        <FontAwesomeIcon
          icon={isGridView ? "fa-solid fa-border-all" : "fa-solid fa-list"}
          onClick={toggleLayout}
        />

        {/* Night Mode */}
        <FontAwesomeIcon
          icon={isNightMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}
          onClick={() => setIsNightMode(!isNightMode)}
        />
      </div>
    </div>
  );
}
