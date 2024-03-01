import React from "react";
import { userMenu } from "./SidebarMenu/userMenu";
import { useLocation, Link } from "react-router-dom";
import '../../../styles/sidebar.css'



const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {userMenu.map((menu) => {
            const isActive = location.pathName === menu.path;
            return (
              <div className={`menu-item ${isActive && "active"}`}>
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;