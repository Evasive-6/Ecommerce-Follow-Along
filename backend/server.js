const express = require('express');
const mongoose = require('mongoose');
const { userModel } = require('./models/User');
const multer = require('multer');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const { productRouter } = require('./routes/product.route.js');
const userRouter = require('./routes/user'); // Import the user route
require('dotenv').config();

const app = express();
const PORT = 8088;

app.use(cors());
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

const mongoURL = process.env.MONGODB_URI || "mongodb+srv://albinshiju285:pov2tBzbVG3yoNA8@cluster0.j5cuo.mongodb.net/Ecom_db";
mongoose.connect(mongoURL);

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/ping', (req, res) => {
  res.send("Pong");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    console.log(req.file);
    res.send({ "message": "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error uploading file" });
  }
});

app.post('/create', async (req, res) => {
  let payload = req.body;
  console.log(payload);
  try {
    let new_user = new userModel(payload);
    await new_user.save();
    res.send({ "message": "Hurray! Successfully saved the user to the database" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ "error": error.message });
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const userPresent = await userModel.findOne({ email });
  if (userPresent?.email) {
    res.send({ "message": "Try login, already exist" });
  } else {
    try {
      bcrypt.hash(password, 4, async function (err, hash) {
        if (err) {
          return res.status(500).send({ "Error-message": "Error hashing password" });
        }
        const user = new userModel({ name, email, password: hash });
        await user.save();
        res.send({ "message": "Sign up successfully" });
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ "Error-message": "Something went wrong, please try again" });
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.find({ email });
    if (user.length > 0) {
      let hashPassword = user[0].password;
      bcrypt.compare(password, hashPassword, function (err, result) {
        if (result) {
          let token = jwt.sign({ "userID": user[0]._id, "email": user[0].email }, process.env.SECRET_KEY, { expiresIn: '1h' });

          // Set token in an HTTP-only cookie
          res.cookie('authToken', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration

          res.send({ "msg": "Login successfully", "token": token });
        } else {
          res.send({ "message": "Invalid credentials" });
        }
      });
    } else {
      res.send({ 'msg': "Login failed! Please sign-up first!" });
    }
  } catch (err) {
    console.error("Error", err);
    res.status(500).send({ "Error-message": "Internal server error" });
  }
});

app.use("/products", productRouter);
app.use("/api/user", userRouter); // Use the user routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
