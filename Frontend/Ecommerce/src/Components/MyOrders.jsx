import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const userEmail = 'user@example.com'; // Replace with actual user email

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post('/api/orders', { email: userEmail });
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, [userEmail]);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong>Order ID:</strong> {order._id}<br />
              <strong>Items:</strong> {order.items.join(', ')}<br />
              <strong>Total:</strong> {order.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
