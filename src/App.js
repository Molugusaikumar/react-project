import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';



function App() {
  const [products, setProducts] = useState([]);  // State to store the products

  // Function to handle adding a new product
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />            
            {/* <Route path="/product/new" element={<ProductForm onAddProduct={handleAddProduct} />} /> */}
            <Route path="/products/new" element={<ProductForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/product/delete" element={}></Route> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;