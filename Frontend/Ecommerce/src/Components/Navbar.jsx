import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-end shadow-lg h-16 bg-slate-300'>
        <NavLink className='pr-11 text-2xl' activeClassName='font-bold' to="/login">Login</NavLink>
        <NavLink className='text-2xl pr-11' activeClassName='font-bold' to="/signup">Signup</NavLink>
        <NavLink className='text-2xl' activeClassName='font-bold' to="/addproduct">Add Product</NavLink>
        <NavLink className='text-2xl pr-11' activeClassName='font-bold' to="/">Home</NavLink>
        <NavLink className='text-2xl pr-11' activeClassName='font-bold' to="/myproducts">My Products</NavLink>
        <NavLink className='text-2xl pr-11' activeClassName='font-bold' to="/cart">Cart</NavLink>
        <NavLink className='text-2xl pr-11' activeClassName='font-bold' to="/my-orders">My Orders</NavLink> 
        <NavLink className='text-2xl' activeClassName='font-bold' to="/profile">Profile</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
