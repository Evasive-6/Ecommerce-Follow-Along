const express = require('express');
const router = express.Router();
const Cart = require('../model/Cart');

// Endpoint to add products to cart
router.post('/add-to-cart', async (req, res) => {
  const { userId, products, total } = req.body;

  try {
    const newCart = new Cart({
      userId,
      products,
      total
    });

    await newCart.save();
    res.status(201).json({ message: 'Products added to cart successfully', cart: newCart });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add products to cart' });
  }
});

// Endpoint to get products in the cart for a user
router.get('/cart/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('products.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart details' });
  }
});

module.exports = router;
