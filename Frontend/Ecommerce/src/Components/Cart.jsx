import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ data }) => {
  const [products, setProducts] = useState(data);
  const navigate = useNavigate();

  const increaseQuantity = async (productId) => {
    const updatedProducts = products.map((product) =>
      product._id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);

    try {
      const response = await fetch(`/api/products/${productId}/increase-quantity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to update quantity');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const decreaseQuantity = async (productId) => {
    const updatedProducts = products.map((product) =>
      product._id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);

    try {
      const response = await fetch(`/api/products/${productId}/decrease-quantity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to update quantity');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handlePlaceOrder = () => {
    navigate('/sellectAdress');
  };

  return (
    <div className='flex flex-wrap w-full justify-center items-center'>
      {products.map((product, idx) => (
        <div className="shadow-2xl flex flex-col justify-center items-center m-10 p-16" key={idx}>
          <img className='border-2 border-black w-64 h-64' src={product.productImage} alt={product.productName} />
          <h3 className='font-bold uppercase text-2xl'>{product.productName}</h3>
          <h4 className='font-bold text-blue-500'>{product.productDescription}</h4>
          <p className='text-gray-700'>Quantity: {product.quantity}</p>
          <div className='flex space-x-2'>
            <button className='bg-blue-500 text-white rounded-xl p-2' onClick={() => increaseQuantity(product._id)}>+</button>
            <button className='bg-red-500 text-white rounded-xl p-2' onClick={() => decreaseQuantity(product._id)}>-</button>
          </div>
        </div>
      ))}
      <button className='bg-green-500 text-white rounded-xl p-4 mt-10' onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
