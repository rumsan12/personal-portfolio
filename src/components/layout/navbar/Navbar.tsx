import React from 'react';
import './style.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#accomplishment">accomplishment</a>
        <a href="#education">Education</a>
        <a href="#cetificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;