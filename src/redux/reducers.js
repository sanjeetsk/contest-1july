// // reducers.js

// import { combineReducers } from 'redux';
// import {
//   FETCH_PRODUCTS_SUCCESS,
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   CLEAR_CART,
// } from '../actions/actionTypes';

// const initialState = {
//   products: [],
//   cart: [],
// };

// const productReducer = (state = initialState.products, action) => {
//   switch (action.type) {
//     case FETCH_PRODUCTS_SUCCESS:
//       return action.payload;
    
//     case ADD_TO_CART:
//         const newProduct = action.payload;
//         const isProductInCart = state.cart && state.cart.find((item) => item && item.id === newProduct.id);
//         if (isProductInCart) {
//           return state;
//         } else {
//           return {
//             ...state,
//             cart: [...state.cart, newProduct],
//           };
//         }

//     case REMOVE_FROM_CART:
//       const productId = action.payload;
//       const updatedCart = state.cart.filter((item) => item.id !== productId);
//       return {
//         ...state,
//         cart: updatedCart,
//       };
//     case CLEAR_CART:
//       return {
//         ...state,
//         cart: [],
//       };
//     default:
//       return state;
//   }
// };

// const cartReducer = (state = initialState.cart, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       if (!state.some((item) => item.id === action.payload.id)) {
//         return [...state, action.payload];
//       }
//       return state;
//     case REMOVE_FROM_CART:
//       return state.filter((item) => item.id !== action.payload);
//     case CLEAR_CART:
//       return [];
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   products: productReducer,
//   cart: cartReducer,
// });

// export default rootReducer;


import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../actions/actionTypes';

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload;

    case ADD_TO_CART:
      const newProduct = action.payload;
      const isProductInCart = state.some((item) => item.id === newProduct.id);
      if (isProductInCart) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }

    case REMOVE_FROM_CART:
      const productId = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      return {
        ...state,
        cart: updatedCart,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.some((item) => item.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;

