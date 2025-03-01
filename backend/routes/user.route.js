const express = require('express');
const router = express.Router();
const User = require('../model/user.model');
const Order = require('../model/order.model'); // Import the Order model
const authentication = require('../middleware/authentication'); // Import the authentication middleware

// Endpoint to get user data
router.get('/profile/:userId', authentication, async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// Endpoint to add user address
router.post('/profile/:userId/address', authentication, async (req, res) => {
  const { userId } = req.params;
  const { address } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.addresses.push(address); 
    await user.save();

    res.status(200).json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add address' });
  }
});

// New endpoint to get user orders by email
router.post('/orders', authentication, async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const orders = await Order.find({ userId: user._id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;

