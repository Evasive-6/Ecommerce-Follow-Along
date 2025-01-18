import express from 'express';
import mongoose from 'mongoose';
const app = express();
import multer from 'multer';
const PORT = 8884;
import { usemodel } from './model/user.model.js';
const mongodburl = "mongodb+srv://albinshiju285:pov2tBzbVG3yoNA8@cluster0.j5cuo.mongodb.net/Ecom_db";
app.use(express.json());

let connection = mongoose.connect(mongodburl);


app.get("/", (req, res) => {
    res.send("pong");
});

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.filename+'-'+Date.now()+"-"+file.originalname)
    }
})
const upload=multer({storage:storage})
app.post("/upload", upload.single("myFile"),(req,res)=>{
    try{
        console.log(req.file);
        res.send({"message":"file uploaded successfully"})
    } catch(error){
        console.log(error);
        res.send({error:"error"})
    }
})


app.post("/create", async (req, res) => {
    let payload = req.body;
    try {
        let user_new = new usemodel(payload);
        await user_new.save();
        res.send({"message": "hurray done dusted yo"});
    } catch (error) {
        console.log(error);
        res.send("error");
    }
});

app.listen(PORT, async () => {
    console.log(`server is running on ${PORT}`);
    try {
        await connection;
        console.log("Connected to mongo db yo");
    } catch (error) {
        console.log("Error", error);
    }
});
2