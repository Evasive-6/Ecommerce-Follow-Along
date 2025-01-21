import express from 'express';
import mongoose from 'mongoose';
const app = express();
import multer from 'multer';
const PORT = 8884;
import { usemodel } from './model/user.model.js';
const mongodburl = "mongodb+srv://albinshiju285:pov2tBzbVG3yoNA8@cluster0.j5cuo.mongodb.net/Ecom_db";
import bcrypt from 'bcrypt';
import cors from 'cors';
app.use(express.json());
app.use(cors());

let connection = mongoose.connect(mongodburl);

app.get("/", (req, res) => {
    res.send("pong");
});

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.filename + '-' + Date.now() + "-" + file.originalname)
    }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("myFile"), (req, res) => {
    try {
        console.log(req.file);
        res.send({ "message": "file uploaded successfully" });
    } catch (error) {
        console.log(error);
        res.send({ error: "error" });
    }
});

app.post("/create", async (req, res) => {
    let payload = req.body;
    const { name, email, password } = req.body;
    try {
        const userpresent = await usemodel.findOne({ email });
        if (userpresent) {
            res.send("User already exists. Please try again.");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            payload.password = hashedPassword;

            let user_new = new usemodel(payload);
            await user_new.save();
            res.send({ "message": "User created successfully!" });
        }
    } catch (error) {
        console.log(error);
        res.send("Error occurred while creating user.");
    }
});

app.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}`);
    try {
        await connection;
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
});
