import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="name">"Name of app"</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trips">Trips</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;