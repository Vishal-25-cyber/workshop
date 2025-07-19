import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import "./Auth.css";

export default function Dashboard() {
  const [site, setSite] = useState("");
  const [siteUser, setSiteUser] = useState("");
  const [sitePass, setSitePass] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const loginMessage = location.state?.message;

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (loginMessage) {
      const timer = setTimeout(() => {
        navigate("/dashboard", { state: {} });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginMessage, navigate]);

  const handleAdd = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("passwords")) || [];
    saved.push({ site, siteUser, sitePass });
    localStorage.setItem("passwords", JSON.stringify(saved));

    setSite("");
    setSiteUser("");
    setSitePass("");
    setSuccess("Password saved successfully!");
  };

  return (
    <>
      <NavBar />
      <div className="auth-container">
        <h2>Add Passwords</h2>
        {loginMessage && <div className="alert">{loginMessage}</div>}
        {success && <div className="alert">{success}</div>}
        <form className="auth-form" onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Site Name"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Site Username"
            value={siteUser}
            onChange={(e) => setSiteUser(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Site Password"
            value={sitePass}
            onChange={(e) => setSitePass(e.target.value)}
            required
          />
          <button type="submit">Add Password</button>
        </form>
      </div>
    </>
  );
}
