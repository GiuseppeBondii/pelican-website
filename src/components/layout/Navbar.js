import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoPelican from '../../assets/LOGO/LOGO nero.png'; 
import { LanguageContext } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Estraiamo i dati dinamicamente dal Context, senza importare il file JSON in alto
  const { language, toggleLanguage, data } = useContext(LanguageContext);
  const { navbar } = data;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const showLogo = !isHomePage || isScrolled;

  return (
    <nav className={`navbar ${showLogo ? 'nav-with-logo' : 'nav-without-logo'}`}>
      <div className="container nav-container">
        
        <div className="nav-header">
          <Link 
            to="/" 
            onClick={closeMenu} 
            className={`nav-logo-link ${showLogo ? 'visible' : 'hidden'}`}
          >
            <img src={logoPelican} alt={navbar.logoAlt} className="nav-logo" />
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
          {navbar.links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} className="nav-link" onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}

          <li>
            <button onClick={toggleLanguage} className="lang-toggle-btn">
              <span className={language === 'ita' ? 'active-lang' : 'inactive-lang'}>IT</span> 
              <span style={{ margin: '0 4px', color: 'var(--ocean-blue)', opacity: 0.5 }}>|</span> 
              <span className={language === 'eng' ? 'active-lang' : 'inactive-lang'}>EN</span>
            </button>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;