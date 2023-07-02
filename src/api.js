// api.js

import axios from 'axios';

export const fetchProductsFromApi = () => {
  return axios.get('https://dummyjson.com/products');
};
