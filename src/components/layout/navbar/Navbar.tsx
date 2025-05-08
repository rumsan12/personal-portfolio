'use client'; 
import React, {useState} from 'react';
import './style.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`} >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;