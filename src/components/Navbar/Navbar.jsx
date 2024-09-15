import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Left.png';
import menuIcon from '../../assets/menu.svg'; // Hamburger icon
import closeIcon from '../../assets/close.svg'; // Close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Using boolean for open/closed state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between true (open) and false (closed)
  };

  return (
    <div className='navbar'>
      <div className="nav-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="nav-link-items">
            <a href="#">Home</a>
            <a href="#about">Program</a>
            <a href="#pricing">Pricing</a>
            <a href="#trainers">Trainers</a>
          </div>
          <div className="buttons">
            <button className='button'>Login</button>
            <button className='bg-button'>Register</button>
          </div>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <img src={menuOpen ? closeIcon : menuIcon} alt="Menu Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
