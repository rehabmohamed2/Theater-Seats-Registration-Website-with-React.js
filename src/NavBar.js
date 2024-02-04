import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon
import './Navbar.css';

const NavBar = () => {
  const [activePage, setActivePage] = useState('Home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
       
        <li className={`nav-item ${activePage === 'Home' ? 'active' : ''}`} onClick={() => handlePageChange('Home')}>
          <a href="/NationalTheaterHome" className="nav-link">Home</a>
        </li>
        <li className={`nav-item ${activePage === 'Login' ? 'active' : ''}`} onClick={() => handlePageChange('Login')}>
          <a href="/" className="nav-link">Login</a>
        </li>
        <li className={`nav-item ${activePage === 'Register' ? 'active' : ''}`} onClick={() => handlePageChange('Register')}>
          <a href="/register" className="nav-link">Register</a>
        </li>
        <li className={`nav-item ${activePage === 'About us' ? 'active' : ''}`} onClick={() => handlePageChange('About us')}>
          <a href="/about-us" className="nav-link">About us</a>
        </li>
        <li className={`nav-item ${activePage === 'Logout' ? 'active' : ''}`} onClick={() => handlePageChange('Logout')} style={{marginLeft:"940px"}}>
          <a href="/NationalTheaterHome" className="nav-link">
            <FaSignOutAlt /> Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
