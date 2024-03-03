import React from "react";
import { GiBloodySword } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand" style={{ marginTop: "-18px" }}>
          <GiBloodySword color="red" /> Blood Bank App
        </div>
        <ul className="navbar-nav flex-row">
          <li className="nav-item mx-3">
            <p className="nav-link">
              <FaRegUserCircle /> Welcome to{" "}
              {user?.name || user?.organizationName || user?.hospitalName}
              <span
                className="badge bg-danger ms-3"
                style={{ fontSize: "90%" }}
              >
                {user?.role}
              </span>
            </p>
          </li>
          <li className="nav-item mx-3">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
