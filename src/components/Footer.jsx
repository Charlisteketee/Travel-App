import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <nav className="Footer">
      <p>Explore amazing trips and adventures around the world through stories, images, and connecting with others.</p>
      <ul>
      <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
      </ul>
    </nav>
  );
};

export default Footer;