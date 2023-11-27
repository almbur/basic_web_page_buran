import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" style={{ backgroundColor: '#2196F3' }}>Home</Link></li>
          <li><Link to="/products" style={{ backgroundColor: '#FF9800' }}>Products</Link></li>
          <li><Link to="/about" style={{ backgroundColor: '#E91E63' }}>About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;