import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Auth.css";

// ✅ Import icons from react-icons
import { FaFacebook, FaGoogle, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

// 🔥 Helper to map site name to icon component
const getSiteIcon = (site) => {
  const name = site.toLowerCase();
  if (name.includes("facebook")) return <FaFacebook color="#1877f2" size={20} />;
  if (name.includes("google")) return <FaGoogle color="#db4437" size={20} />;
  if (name.includes("github")) return <FaGithub color="#333" size={20} />;
  if (name.includes("twitter")) return <FaTwitter color="#1da1f2" size={20} />;
  if (name.includes("instagram")) return <FaInstagram color="#e1306c" size={20} />;
  if (name.includes("youtube")) return <FaYoutube color="#ff0000" size={20} />;
  if (name.includes("linkedin")) return <FaLinkedin color="#0077b5" size={20} />;
  return <FaGlobe color="#555" size={20} />; // default
};

export default function SavedPasswords() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("passwords")) || [];
    setEntries(saved);
  }, []);

  const handleDelete = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    localStorage.setItem("passwords", JSON.stringify(updated));
    setEntries(updated);
  };

  return (
    <>
      <NavBar />
      <div className="auth-container">
        <h2>Saved Passwords</h2>
        {entries.length === 0 ? (
          <p>No saved passwords yet.</p>
        ) : (
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>
                <strong>Site:</strong> {getSiteIcon(entry.site)} {" "}
                {entry.site} <br />
                <strong>Username:</strong> {entry.siteUser} <br />
                <strong>Password:</strong> {entry.sitePass} <br />
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
