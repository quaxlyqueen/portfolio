import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
/*
 * Create a nav bar component.
 * 
 * Use Bootstrap for styling.
 *
 * TODO: Add links as a prop.
 */
export default function Navigation() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Josh Ashton</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarCollapsed ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav nav-fill w-100">
            <a className="nav-link" href="/projects"><li className="nav-item">Projects</li></a>
            <a className="nav-link" href="/about"><li className="nav-item">About</li></a>
            <a className="nav-link" href="/contact"><li className="nav-item">Contact</li></a>
            <a className="nav-link" href="/resume"><li className="nav-item">Resume</li></a>
            <a className="nav-link" href="/blog"><li className="nav-item">Blog</li></a>
          </ul>
        </div>
      </nav>
    </>
  );
}