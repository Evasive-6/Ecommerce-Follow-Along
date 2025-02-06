const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { productModel } = require('../model/product.model');
let productRouter = express.Router();

// Ensure upload directory exists
const uploadDir = path.resolve('./uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

productRouter.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send({ "message": "Successfully retrieved the data from the database", data: products });
  } catch (error) {
    res.status(500).send({ "Error-message": error.message });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
// Update product
productRouter.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

productRouter.post('/create', upload.array('productImage', 12), async (req, res) => {
  try {
    const { productName, productDescription, productPrice, userMail } = req.body;  // Include userMail in the request body
    const imgPath = req.files.map((file) => {
      return (`/uploads/${file.filename}`);
    });
    const newProduct = new productModel({
      productName,
      productDescription,
      productPrice,
      userMail,  // Save the user's email with the product
      productImages: imgPath
    });

    await newProduct.save();
    res.status(201).json({ "message": "Hurray! Product added to the database successfully", "product": newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// GET /products/:email - Fetch products by user email
productRouter.get('/:email', async (req, res) => {
  try {
    const userMail = req.params.email;
    const products = await productModel.find({ userMail });
    res.json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

module.exports = { productRouter };
