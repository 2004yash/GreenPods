import React from 'react';
import './styles.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">GreenPods</div>
        <ul className="nav-links">
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
