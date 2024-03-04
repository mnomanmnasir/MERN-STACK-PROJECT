import React from "react";
// import { userMenu } from "./SidebarMenu/userMenu";
import { useLocation, Link } from "react-router-dom";
import "../../../styles/sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const isActive = location.pathname;

  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="sidebar">
        {/* <h3>
            Dashboard
          </h3> */}
        <div className="menu">
          {user?.role === "organization" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <Link to="/donar">Donar</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/organization" && "active"
                }`}
              >
                <i className="ffa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/organization">Organization</Link>
              </div>
            </>
          )}
          {user?.role === "hospital" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/consumer" && "active"
                }`}
              >
                <i className="ffa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/consumer">Consumer</Link>
              </div>
            </>
          )}

          {user?.role === "donar" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donation" && "active"
                }`}
              >
                <i className="ffa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/donation">Donation</Link>
              </div>
            </>
          )}
          {/* {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                className={`menu-item ${isActive && "active"}`}
                key={menu.name}
              >
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
