import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-wrapper">
          <div className="header-top__promo">
            <p>Shipping Worldwide ! Free Shipping available in the UK.</p>
          </div>
          <ul className="header-top__pages-navigation">
            <li>
              <Link className="page-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-center"></div>
      <div className="header-bottom"></div>
    </div>
  );
};

export default Header;
