import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-end shadow-lg h-16  bg-slate-300' >
        <button className='pr-11 text-2xl'><Link to={"/login"}>login</Link></button>
        <button className='text-2xl pr-11'><Link to={"/signup"}>Signup</Link></button>
        <button className='text-2xl'><Link to={"/addproduct"}>Add Product</Link></button>
        <button className='text-2xl pr-11'><Link to={'/'}>Home</Link></button>
        <button className='text-2xl pr-11'><Link to={'/'}>My Products</Link></button>
        <button className='text-2xl'><Link to={'/cart'}>Cart</Link></button>
      </nav>
    </div>
  )
}

export default Navbar
