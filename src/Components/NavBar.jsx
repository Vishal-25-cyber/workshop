import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      state: { message: "Logged out successfully!" },
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/dashboard")}>
        🔐 MyPassword Manager
      </div>
      <ul className="navbar-links">
        <li onClick={() => navigate("/dashboard")}>Add Passwords</li>
        <li onClick={() => navigate("/saved-passwords")}>Saved Passwords</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}
