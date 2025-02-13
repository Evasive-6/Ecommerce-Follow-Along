const express = require('express');
const router = express.Router();
const Cart = require('../model/Cart');

// Endpoint to add products to cart
router.post('/add-to-cart', async (req, res) => {
  const { products, total } = req.body;

  try {
    const newCart = new Cart({
      products,
      total
    });

    await newCart.save();
    res.status(201).json({ message: 'Products added to cart successfully', cart: newCart });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add products to cart' });
  }
});

module.exports = router;
