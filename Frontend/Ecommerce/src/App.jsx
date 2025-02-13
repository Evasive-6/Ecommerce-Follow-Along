import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Productform from './Components/Productform';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/addproduct" element={<Productform />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
