import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import "../style/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // LocalStorage থেকে user পড়া
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          SharePic
        </div>

        <div className="nav-center">
          Hi, {user?.name || "User"}
        </div>

        <div className="nav-right">
          <Link to="/feed">Post Page</Link>

          <Link to="/create-post">
            Create Post
          </Link>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;