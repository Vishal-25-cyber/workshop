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
      <div className="navbar-brand" onClick={() => navigate("/saved-passwords")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#ffffff"
          viewBox="0 0 24 24"
          style={{ marginRight: "8px", verticalAlign: "middle" }}
        >
          <path d="M12 2C9.24 2 7 4.24 7 7v3H5v12h14V10h-2V7c0-2.76-2.24-5-5-5zm-1 5h2v3h-2V7zm6 5v8H7v-8h10z" />
        </svg>
        <span>MyPassword Manager</span>
      </div>

      <ul className="navbar-links">
        <li onClick={() => navigate("/saved-passwords")}>Saved Passwords</li>
        <li onClick={() => navigate("/dashboard")}>Add Password</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}
