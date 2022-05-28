import React, { useState } from "react";
import "./styles/Sidebar.styles.css";

import { RiMenuLine, RiBarChartLine } from "react-icons/ri";

const SideBar = ({ columns, setColumns }) => {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    isExpanded
      ? localStorage.setItem("sidebar-collapsed", true)
      : localStorage.removeItem("sidebar-collapsed");
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={"Sidebar" + (isExpanded ? "" : " isCollapsed")}>
    {console.log({isExpanded})}
      <div className="sidebar-header">
        <RiMenuLine className="sidebar-icon" onClick={handleToggler} />
      </div>
      { isExpanded ? 
      <div className="sidebar-items">
        <div className="sidebar-item">
          <RiBarChartLine className="sidebar-icon" />
          <span className="sidebar-text">
            <input
              className="column-input"
              value={columns}
              placeholder={6}
              onChange={(e) => {
                setColumns(e.target.value);
              }}
            />
            {" columnas"}
          </span>
        </div>
      </div> :
      null
      }
    </div>
  );
};

export default SideBar;
