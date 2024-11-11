import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fake-store-api.mock.beeceptor.com/api/products/${product_id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(() => console.error('Error fetching product details'));
  }, [product_id]);

  return (
    <div className="p-4">
      {product ? (
        <div className="border p-4 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>      
          <p className="mb-2">Description: {product.description}</p>
          <p className="mb-2">Price: ${product.price}</p>
          <p className="mb-2">Unit: {product.unit}</p>
          <p className="mb-2">Rating: {product.rating} stars</p>
          <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
          <p className="mb-2">Id:{ product.product_id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
