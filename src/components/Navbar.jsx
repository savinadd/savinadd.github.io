import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-links">
          <Link
            className="navbar-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="navbar-link"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={60}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="navbar-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={60}
            duration={500}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
