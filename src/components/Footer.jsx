import React from 'react';
import footerLogo from '../assets/images/Logo-Black-and-red-transparent1-1.png';
import '../assets/css/styles.css';

const Footer = () => (
  <footer className="footer gray">
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-9">
          <h1 style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={footerLogo} alt="Footer Logo" style={{height: '80px', width: 'auto'}} />
            Phence.me
          </h1>
          <p>Whatever you do, Wherever you go, be safe and get peace of mind.</p>
        </div>
        <div className="col-md-3 col-sm-3 center">
          <p>Follow us on:</p>
          <ul className="social-icons">
            <li><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
