import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/fashion logo.png" alt="Logo" />
      </div>
      <div className={`links ${isOpen ? 'show' : ''}`}>
        <ol>
          <li><a href="#home" onClick={(event) => handleLinkClick(event, 'home')}>Home</a></li>
          <li><a href="#products" onClick={(event) => handleLinkClick(event, 'products')}>Products</a></li>
          <li><a href="#shop" onClick={(event) => handleLinkClick(event, 'shop')}>Shop</a></li>
          <li><a href="#contact" onClick={(event) => handleLinkClick(event, 'contact')}>Contacts</a></li>
        </ol>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
