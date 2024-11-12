import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [product, setProduct] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({});
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4">{initialData.name ? 'Edit Product' : 'Add New Product'}</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Id</label>
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={product.id || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          value={product.description || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Unit</label>
        <input
          type="text"
          name="unit"
          placeholder="Unit (e.g., Piece)"
          value={product.unit || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Discount (%)</label>
        <input
          type="number"
          name="discount"
          placeholder="Discount"
          value={product.discount || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="availability"
          checked={product.availability || false}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="font-medium">Available</label>
      </div>

      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {initialData.name ? 'Update Product' : 'Add Product'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
