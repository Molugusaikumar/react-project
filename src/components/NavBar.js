import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/" className="mr-10" mg-8>Home</Link>
          <Link to="/products" className="mr-20">Products</Link>
          <Link to="/about" className="mr-20">About Us</Link>
          <Link to="/contact" className="mr-20">Contact Us</Link>
           
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
