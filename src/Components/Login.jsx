import React from "react";
import { useLocation } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const location = useLocation();
  const successMessage = location.state?.successMessage;

  return (
    <div className="auth-container">
      {successMessage && (
        <div className="alert">
          {successMessage}
        </div>
      )}

      <h2>Login</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}
