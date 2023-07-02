// Home.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchProducts } from '../actions/productActions';

const Home = ({ products, fetchProducts, addToCart }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <div className="container">
        {products && products.map((product) => (
          <div key={product.id} className='product'>
            <img src={product.thumbnail} alt={product.title}/>
            <div className='product-title'>
              <p id='des'>{product.title}</p>
              <p id='price'>Price: ${product.price}</p>
            </div>
            <button className='btn-add' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products, // Update the property name to "state.products"
  };
};

export default connect(mapStateToProps, { fetchProducts, addToCart })(Home);
