import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/MainContent';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product1" element={<ProductDetails productId="1" />} />
          <Route path="/product2" element={<ProductDetails productId="2" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;