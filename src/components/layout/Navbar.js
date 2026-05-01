import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoPelican from '../../assets/LOGO/LOGO nero.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        
        <div className="nav-header">
          {/* Manteniamo Link per il logo */}
          <Link to="/" onClick={closeMenu}>
            <img src={logoPelican} alt="PELICAN Logo" className="nav-logo" />
          </Link>
          
          <button 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Usiamo NavLink per i collegamenti: aggiungerà la classe "active" in automatico */}
          <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/project" className="nav-link" onClick={closeMenu}>The Project</NavLink></li>
          <li><NavLink to="/science" className="nav-link" onClick={closeMenu}>Science</NavLink></li>
          <li><NavLink to="/patients" className="nav-link" onClick={closeMenu}>For Patients</NavLink></li>
          <li><NavLink to="/contributors" className="nav-link" onClick={closeMenu}>Contributors</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</NavLink></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;