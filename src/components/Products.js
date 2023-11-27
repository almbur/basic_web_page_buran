import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2 style={{ color: '#E91E63' }}>Our Colorful Products</h2>
      <div style={{ backgroundColor: '#FFF176', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
        <h3>Product 1</h3>
        <p>Price: $20</p>
        <Link to="/product1">
          <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px', borderRadius: '3px', cursor: 'pointer' }}>View Details</button>
        </Link>
      </div>
      <div style={{ backgroundColor: '#81C784', padding: '10px', borderRadius: '5px' }}>
        <h3>Product 2</h3>
        <p>Price: $30</p>
        <Link to="/product2">
          <button style={{ backgroundColor: '#FF9800', color: 'white', padding: '8px', borderRadius: '3px', cursor: 'pointer' }}>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;