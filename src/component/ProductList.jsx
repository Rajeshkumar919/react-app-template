// ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-3">
      <h2 className="mb-3">Product List</h2>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} alt={product.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
