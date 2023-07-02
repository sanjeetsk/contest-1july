// MyCart.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from '../actions/productActions';

const MyCart = ({ cartItems, removeFromCart, clearCart }) => {

    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    clearCart();
    setCheckoutSuccess(true);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };


  return (
    <div>
      <h2>My Cart</h2>
      <div className="container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
            <>
            {
                cartItems.map((item) => (
                    <div key={item.id} className='product'>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className='product-title'>
                      <p id='des'>{item.title}</p>
                      <p id='price'>Price: ${item.price}</p>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)} className='btn-add'>
                        Remove from Cart
                    </button>
                    </div>
                ))
            }
            </>
            )
        }
                </div>
                <div className="checkout-sidebar">
                <h3>Checkout</h3>
                    <div>
                    <p>Total Price: ${calculateTotalPrice()}</p>
                    <button onClick={handleCheckout}>Checkout</button>
                    </div>
                    {checkoutSuccess && <p>Items have been checked out successfully!</p>}
                </div>
                </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart || [],
  };
};

export default connect(mapStateToProps, { removeFromCart, clearCart })(MyCart);
