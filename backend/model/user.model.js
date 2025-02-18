const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true, min: 8, max: 15 },
    address: { type: String }  
});

const UserModel = mongoose.model('usercollection', userSchema);

module.exports = {
    UserModel
};
