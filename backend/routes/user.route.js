const express = require('express');
const router = express.Router();
const User = require('../model/user.model');
const authentication = require('../middleware/authentication'); 
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

    user.address = address;
    await user.save();

    res.status(200).json({ address: user.address });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add address' });
  }
});

module.exports = router;
