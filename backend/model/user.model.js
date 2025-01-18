import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number
});

const usemodel=mongoose.model("usercollection",userSchema);
// export {usemodel};
export {usemodel}