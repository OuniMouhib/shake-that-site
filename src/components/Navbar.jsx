// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <ul>
      
        <li>
          <Link to="ocean-facts" smooth={true} duration={500}>
            Ocean Facts
          </Link>
        </li>
        <li>
          <Link to="quiz" smooth={true} duration={500}>
            Quiz
          </Link>
        </li>
        <li>
          <Link to="games" smooth={true} duration={500}>
            Games
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact us 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
