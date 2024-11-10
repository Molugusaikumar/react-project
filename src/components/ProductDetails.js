import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fake-store-api.mock.beeceptor.com/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(() => console.error('Error fetching product details'));
  }, [id]);

  return (
    <div className="p-4">
      {product ? (
        <div className="border p-4 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <img src={product.image || '/path/to/placeholder.jpg'} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <p className="mb-2">Description: {product.description}</p>
          <p className="mb-2">Price: ${product.price}</p>
          <p className="mb-2">Unit: {product.unit}</p>
          <p className="mb-2">Rating: {product.rating} stars</p>
          <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
