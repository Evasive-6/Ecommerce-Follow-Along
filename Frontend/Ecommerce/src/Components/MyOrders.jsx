import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default payment method is COD
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

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.post('/api/cancel-order', { orderId });
      alert(response.data.message);

      // Update the local state to reflect the canceled status
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: 'Canceled' } : order
        )
      );
    } catch (error) {
      console.error('Failed to cancel order:', error);
      alert('Error canceling the order. Please try again.');
    }
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

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
              <strong>Total:</strong> {order.total}<br />
              <strong>Status:</strong> {order.status}<br />
              {order.status !== 'Canceled' && (
                <button onClick={() => cancelOrder(order._id)}>
                  Cancel Order
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <h3>Payment Options</h3>
      <form>
        <label>
          <input
            type="radio"
            name="payment-method"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={handlePaymentChange}
          />
          Cash on Delivery (COD)
        </label><br />
        <label>
          <input
            type="radio"
            name="payment-method"
            value="online"
            checked={paymentMethod === 'online'}
            onChange={handlePaymentChange}
          />
          Online Payment
        </label>
      </form>

      {paymentMethod === 'online' && (
        <div id="paypal-buttons">
          {/* PayPal button placeholders */}
          <p>PayPal Buttons Placeholder</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
