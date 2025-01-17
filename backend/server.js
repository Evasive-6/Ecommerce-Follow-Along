const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT=8884;
const mongodburl="mongodb+srv://albinshiju285:pov2tBzbVG3yoNA8@cluster0.j5cuo.mongodb.net/Ecom_db"

let connection = mongoose.connect(mongodburl)

app.get("/",(req,res)=>{
    res.send("pong")
})
app.listen(PORT,async()=>{
    console.log(`server is running on ${PORT}`)
    try {
        await connection;
        console.log("Connected to mongo db yo")
    } catch (error) {
        console.log("Error",error)
    }
})