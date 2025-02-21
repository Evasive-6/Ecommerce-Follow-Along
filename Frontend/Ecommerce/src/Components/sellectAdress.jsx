import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectAddress = ({ products }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/profile/:userId/addresses') 
      .then(response => response.json())
      .then(data => setAddresses(data.addresses))
      .catch(error => console.error('Error fetching addresses:', error));
  }, []);

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      alert('Please select an address.');
      return;
    }

    const orderData = {
      userId: 'userId', 
      addressId: selectedAddress,
      products: products,
    };

    fetch('/api/place-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Order placed successfully') {
        alert('Order placed successfully');
      
        navigate('/order-confirmation');
      } else {
        alert('Failed to place order');
      }
    })
    .catch(error => {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    });
  };

  return (
    <div>
      <h1>Select an Address</h1>
      <div>
        {addresses.map(address => (
          <div key={address.id}>
            <input
              type="radio"
              name="address"
              value={address.id}
              onChange={handleAddressChange}
            />
            {address.line1}, {address.city}, {address.state}, {address.zip}
          </div>
        ))}
      </div>

      <h2>Order Summary</h2>
      <div>
        {products.map((product, idx) => (
          <div key={idx}>
            <p>{product.productName} - {product.quantity} x ${product.price}</p>
          </div>
        ))}
      </div>

      <h3>Selected Address</h3>
      <p>{selectedAddress && addresses.find(addr => addr.id === selectedAddress)?.line1}</p>

      <h3>Total Value</h3>
      <p>${calculateTotal()}</p>

      <button onClick={handlePlaceOrder} className="bg-green-500 text-white rounded-xl p-4 mt-10">
        Place Order
      </button>
    </div>
  );
};

export default SelectAddress;
