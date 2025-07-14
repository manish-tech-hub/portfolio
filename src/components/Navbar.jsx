import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links desktop-only">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <div 
            className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`} 
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className="switch-handle"></div>
            <div className="switch-track">
              <span className="dark-icon">🌙</span>
              <span className="light-icon">☀️</span>
            </div>
          </div>

          <div className="hamburger mobile-only" onClick={() => setMenuOpen(true)}>
            &#9776;
          </div>
        </div>
      </nav>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul className="sidebar-links">
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
