const express = require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const mongoURL = process.env.URL;
const connection=mongoose.connect(mongoURL)
const user=require('./models/schema');
const router = require('./routes/routes');
app.use(express.json())

app.use("/",router)

const PORT=8080
app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("Connected to mongoDB atlas")
    } catch (error) {
        console.log("Database connection failed" ,error)
    }
    console.log(`Server is running on http://localhost:${PORT}`);
})