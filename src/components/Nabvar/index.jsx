import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo granja.png"; // Cambia por tu logo real
import "./Nabvar.css"; // Archivo CSS

const Nabvar = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.style.backgroundColor = darkMode ? "#121212" : "#f5f5f5";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Logo */}
      <img
        src={logoImg}
        alt="Logo"
        className="navbar-logo"
        onClick={() => navigate("/")}
      />

      {/* Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Inicio
        </Link>
        <Link to="/Animales" className="navbar-link">
          Animales
        </Link>
        {!loggedInUser && (
          <>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
            <Link to="/register" className="navbar-link">
              Registro
            </Link>
          </>
        )}
      </div>

      {/* Toggle de modo oscuro */}
      <button className="navbar-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Claro ☀️" : "Oscuro 🌙"}
      </button>
    </nav>
  );
};

export default Nabvar;
