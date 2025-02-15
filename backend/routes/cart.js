const express = require('express');
const router = express.Router();
const Cart = require('./model/Cart');

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

// Endpoint to increase quantity
router.post('/increase-quantity', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const product = cart.products.find((product) => product.productId.toString() === productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    product.quantity += 1;
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to increase quantity' });
  }
});

// Endpoint to decrease quantity
router.post('/decrease-quantity', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const product = cart.products.find((product) => product.productId.toString() === productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      return res.status(400).json({ message: 'Quantity cannot be less than 1' });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to decrease quantity' });
  }
});

module.exports = router;
