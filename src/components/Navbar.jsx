import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    // check if click is outside menu
    if (!document.querySelector('.menu').contains(event.target) &&
        !document.querySelector('.menu-icon').contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // add event listener to detect clicks outside the menu
    document.addEventListener('click', handleClickOutside);

    // cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="name">A Way of Life</Link>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;