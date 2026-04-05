import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPelican from '../../assets/LOGO/LOGO nero.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        
        <div className="nav-header">
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
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/project" className="nav-link" onClick={closeMenu}>The Project</Link></li>
          <li><Link to="/science" className="nav-link" onClick={closeMenu}>Science</Link></li>
          <li><Link to="/patients" className="nav-link" onClick={closeMenu}>For Patients</Link></li>
          <li><Link to="/contributors" className="nav-link" onClick={closeMenu}>Contributors</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;