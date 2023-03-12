import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/UniInfo" className="nav-button">University Information</Link>
    </nav>
  );
}

export default Header;
