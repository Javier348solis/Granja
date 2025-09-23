// src/components/Nabvar/index.jsx
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../../Styles/Navbar.css";
import logo from "../../assets/logo granja.png"; // tu logo

const Navbar = () => {
  const { darkMode, setDarkMode } = useOutletContext() || {};

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>

      {/* Links */}
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/animales">Animales</Link>
      </div>

      {/* Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
