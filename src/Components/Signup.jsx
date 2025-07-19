import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === username);

    if (exists) {
      setError("User already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login", {
      state: { message: "Signup successful! Please login." },
    });
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <div className="alert error">{error}</div>}
      <form className="auth-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
