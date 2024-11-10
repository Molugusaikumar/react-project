import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    unit: '',
    image: '',
    discount: '',
    availability: true,
    rating: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddProduct) {
      onAddProduct(newProduct); // Call onAddProduct passed from parent component
      setNewProduct({
        name: '',
        description: '',
        price: '',
        unit: '',
        image: '',
        discount: '',
        availability: true,
        rating: '',
      });
    } else {
      console.error('onAddProduct is not a function');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-gray-700">Unit</label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={newProduct.unit}
            onChange={handleInputChange}
            placeholder="Unit"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount (%)</label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={newProduct.discount}
            onChange={handleInputChange}
            placeholder="Discount (%)"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={newProduct.rating}
            onChange={handleInputChange}
            placeholder="Rating"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <label htmlFor="availability" className="text-sm font-medium text-gray-700">Available</label>
        <input
          type="checkbox"
          id="availability"
          name="availability"
          checked={newProduct.availability}
          onChange={() => setNewProduct((prev) => ({ ...prev, availability: !prev.availability }))}
          className="p-2"
        />
      </div>

       <button type="submit" className="w-full p-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
