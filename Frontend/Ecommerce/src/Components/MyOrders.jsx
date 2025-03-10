import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

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

  const handleApprove = (orderID) => {
    console.log('Payment Approved. Order ID:', orderID);
    alert(`Payment successful! Order ID: ${orderID}`);
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
        <PayPalScriptProvider
          options={{
            "client-id": "Your-PayPal-Client-ID", // Replace with your PayPal client ID
            currency: "USD", // Adjust as per your needs
          }}
        >
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              // Example order creation
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: '20.00', // Replace with dynamic order total
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handleApprove(data.orderID);
              });
            }}
            onError={(err) => {
              console.error('Payment Error:', err);
              alert('Payment failed. Please try again.');
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default MyOrders;
