'use client'; 
import React, {useState} from 'react';
import './style.css';
import{usePathname} from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`} >
        <a href="/" className={pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/about" className={pathname === '/about' ? 'active' : ''}>About</a>
        <a href="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</a>
        <a href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;