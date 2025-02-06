const express = require('express');
const jwt = require('jsonwebtoken');
const { userModel } = require('../model/user.model');
const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });

    req.user = user;
    next();
  });
};

// Endpoint to get the user's email
router.get('/email', authenticateToken, async (req, res) => {
  try {
    const user = await userModel.findById(req.user.userID);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching email', error: error.message });
  }
});

module.exports = router;
