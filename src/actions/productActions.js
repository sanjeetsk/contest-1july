// productActions.js

import { fetchProductsFromApi } from '../api';
import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from './actionTypes';

// Action creator to fetch products
export const fetchProducts = () => {
  return (dispatch) => {
    fetchProductsFromApi()
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Action creator for successful product fetch
export const fetchProductsSuccess = (response) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: response.products, // Access the 'products' array from the API response
  };
};



// Action creator to add a product to the cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// Action creator to remove a product from the cart
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

// Action creator to clear the cart
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
