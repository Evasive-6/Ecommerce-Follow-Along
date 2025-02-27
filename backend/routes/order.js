const express = require('express');
const mongoose = require('mongoose');
const { userModel } = require('../model/user.model'); // Assuming you have a User model
const { orderModel } = require('../model/order.modle'); // Assuming you have an Order model
const authentication = require('../middleware/authentication'); // Import the authentication middleware

const router = express.Router();

router.use(express.json());

router.post('/create-orders', authentication, async (req, res) => {
    const { email, address, products } = req.body;

    try {
        // Find the user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userId = user._id;

        // Create orders for each product with the same address
        const orders = products.map((product) => ({
            userId,
            product,
            address,
            createdAt: new Date(),
            status: 'Pending', // or any default status you want to set
        }));

        // Save orders to MongoDB
        const savedOrders = await orderModel.insertMany(orders);

        res.status(201).json(savedOrders);
    } catch (error) {
        console.error('Error creating orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
