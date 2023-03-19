import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/Home" className="nav-button">Home</Link>
      <Link to="/UniInfo" className="nav-button">University Information</Link>
      <Link to="/SOP" className="nav-button">SOP</Link>
      <Link to="/" className="nav-button">Visa Information</Link>
      <Link to="/Progress" className="nav-button">Progress</Link>
    </nav>
  );
}

export default Header;
