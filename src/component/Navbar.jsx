import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImNewspaper } from "react-icons/im";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container">
        <Link className="navbar-brand" style={{ fontSize: '30px' }} to="/"><ImNewspaper /></Link>
        {/* <img src="/newspaper.gif" alt="" /> */}
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleDarkMode}>Dark Mode</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/General">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science">Science</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Entertainment">Entertainment</Link>
            </li>



          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
