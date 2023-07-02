// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='nav'>
        <div className='brand'>
            <Link>Shopping Cart</Link>
        </div>
        <div className='nav-items'>
          <Link to="/">Home</Link>
          <Link to="/my-cart">My Cart</Link>
        </div>       
   </div>
  );
};

export default Navbar;
