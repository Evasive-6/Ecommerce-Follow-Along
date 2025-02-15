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
productRouter.get("/:id", async (req, res) => {
  try {
    const id=req.params.id;
    const product = await productModel.findById(id);
    res.status(200).send({ "message": "Successfully retrieved the data from the database", data: product });
  } catch (error) {
    res.status(500).send({ "Error-message": error.message });
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const id=req.params.id;
    const product = await productModel.findByIdAndDelete(id);
    res.status(200).send({ "message": "Successfully deleted the product"});
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

productRouter.post('/create', upload.array('productImage', 12), async (req, res) => {
  try {
    const { productName, productDescription, productPrice } = req.body;
    const imgPath = req.files.map((file) => {
      return (`/uploads/${file.filename}`);
    });
    const newProduct = new productModel({
      productName,
      productDescription,
      productPrice,
      productImages: imgPath
    });

    await newProduct.save();
    res.status(201).json({ "message": "Hurray! Product added to the database successfully", "product": newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = { productRouter };
