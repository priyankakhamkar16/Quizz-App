import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Quiz App</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#start-quiz">Start Quiz</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
