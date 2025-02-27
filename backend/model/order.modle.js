const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'usercollection', required: true },
  product: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'productCollection', required: true },
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    productPrice: { type: String, required: true },
    quantity: { type: Number, required: true }
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' }
});

const orderModel = mongoose.model('orderCollection', orderSchema);

module.exports = { orderModel };
