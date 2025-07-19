import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Auth.css";
import {
  FaInstagram,
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaSnapchatGhost,
  FaLock,
} from "react-icons/fa";

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

  const getSiteIcon = (site) => {
    const name = site.toLowerCase();
    if (name.includes("instagram")) return <FaInstagram color="#E4405F" />;
    if (name.includes("facebook")) return <FaFacebook color="#1877F2" />;
    if (name.includes("google")) return <FaGoogle color="#DB4437" />;
    if (name.includes("twitter")) return <FaTwitter color="#1DA1F2" />;
    if (name.includes("linkedin")) return <FaLinkedin color="#0077B5" />;
    if (name.includes("github")) return <FaGithub color="#333" />;
    if (name.includes("youtube")) return <FaYoutube color="#FF0000" />;
    if (name.includes("snapchat")) return <FaSnapchatGhost color="#FFFC00" />;
    return <FaLock color="#003366" />;
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
                <strong>
                  {getSiteIcon(entry.site)} {entry.site}
                </strong>
                <br />
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
