import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    // Get existing users from localStorage (or empty array)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      setError("User already exists with this email.");
      return;
    }

    // Add new user
    const newUser = { username, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redirect to login with success message
    navigate("/login", { state: { successMessage: "Signup successful! Please login." } });
  };

  return (
    <div className="auth-container">
      {error && <div className="alert error">{error}</div>}
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
