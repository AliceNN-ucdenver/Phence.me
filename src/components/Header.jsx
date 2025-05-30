import React, { useState } from 'react';
import logo from '../assets/images/Logo-Black-and-red-transparent1-1.png';
import '../assets/css/styles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Phence.me Logo" style={{maxHeight: '90px', width: 'auto'}} />
            </a>
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
