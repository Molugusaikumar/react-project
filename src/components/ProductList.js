import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleAddProduct = (newProduct) => {
    if (isEditing) {
      // Update existing product logic
      setProducts(products.map(product => 
        product.id === currentProduct.id ? { ...newProduct, id: currentProduct.id } : product
      ));
      setFilteredProducts(products);
      setIsEditing(false);
      setCurrentProduct(null);
    } else {
      // Add new product with a unique ID
      const newProductWithId = { ...newProduct, id: Date.now() };
      setProducts([...products, newProductWithId]);
      setFilteredProducts([...products, newProductWithId]);
      setShowForm(false); // Hide the form after adding
    }
  };


  const handleDeleteProduct = (id) => {
    fetch(`https://fake-store-api.mock.beeceptor.com/api/products/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          const updatedProducts = products.filter(product => product.id !== id);
          setProducts(updatedProducts);
          setFilteredProducts(updatedProducts);
        } else {
          console.error('Error deleting product');
        }
      })
      .catch(() => console.error('Error deleting product'));
  };

  return (
    <div className="p-2 md:p-4">
      <SearchBar onSearch={handleSearch} />
      <button onClick={() => setShowForm(true)} className="mt-4 mb-2 p-2 bg-blue-500 text-white rounded">Add New Product</button>

      {showForm && (
        <ProductForm
          onSubmit={handleAddProduct}
          initialData={isEditing ? currentProduct : {}}
          onCancel={() => {
            setShowForm(false);
            setIsEditing(false);
            setCurrentProduct(null);
          }}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-2 md:p-4 shadow hover:shadow-lg">
            <h2 className="text-lg md:text-xl font-bold">{product.name || 'No Name'}</h2>
            <p className="mt-1 text-sm md:text-base">Price: ${product.price || 'N/A'}</p>
            <p className="mt-1 text-sm md:text-base">Description: {product.description || 'No description available'}</p>
            <p className="mt-1 text-sm md:text-base">Unit: {product.unit || 'N/A'}</p>
            <p className="mt-1 text-sm md:text-base">Rating: {product.rating ? `${product.rating} stars` : 'Not rated'}</p> 
            <button onClick={() => handleDeleteProduct(product.id)} className="mt-2 p-1 bg-red-500 text-white rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
