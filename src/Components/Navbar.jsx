import React from 'react';
import '../Styles/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="#"><img src="logo.png" alt="Logo" /></a>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#news">Stats</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Navbar;