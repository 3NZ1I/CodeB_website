import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">CodeB</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="/#products">Products</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#team">Team</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;