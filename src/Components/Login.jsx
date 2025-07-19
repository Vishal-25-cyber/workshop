import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(location.state?.message || "");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      navigate("/saved-passwords", {
        state: { message: "Login successful!" },
      });
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {successMessage && <div className="alert">{successMessage}</div>}
      {error && <div className="alert error">{error}</div>}
      <form className="auth-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <a href="/">Sign up</a>
        </p>
      </form>
    </div>
  );
}
