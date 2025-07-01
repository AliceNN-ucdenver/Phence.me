import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo-Black-and-red-transparent1-1.png';
import '../assets/css/styles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-section">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
              <img src={logo} alt="Phence.me Logo" style={{maxHeight: '90px', width: 'auto'}} />
            </Link>
          </div>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'in' : ''}`} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="menu-item"><a href="#" onClick={() => setIsMenuOpen(false)}>Login</a></li>
              <li className="menu-item"><a href="#" onClick={() => setIsMenuOpen(false)}>Signup</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
