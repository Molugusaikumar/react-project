import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (term) => {
    if (term.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Fetch products initially
  useEffect(() => {
    fetch('https://fake-store-api.mock.beeceptor.com/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(() => console.error('Error fetching products'));
  }, []);

  return (
    <div className="p-2 md:p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-2 md:p-4 shadow hover:shadow-lg">
            <h2 className="text-lg md:text-xl font-bold">{product.name || 'No Name'}</h2>
           
            <p className="mt-1 text-sm md:text-base">Price: ${product.price || 'N/A'}</p>
            <p className="mt-1 text-sm md:text-base">Description: {product.description || 'No description available'}</p>
            <p className="mt-1 text-sm md:text-base">Unit: {product.unit || 'N/A'}</p>
            <p className="mt-1 text-sm md:text-base">Rating: {product.rating ? `${product.rating} stars` : 'Not rated'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
