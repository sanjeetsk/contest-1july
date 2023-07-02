// App.js

import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Mycart from './component/Mycart';
import Navbar from './component/Navbar';


const App = ({fetchProducts}) => {

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/my-cart" element={<Mycart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(null, { fetchProducts })(App);
