const mongoose = require("mongoose")
const {Schema} =  mongoose

const userSchema = new Schema({
    email: String,
    password: String,
    cart: [{
        cardId: String,
        quantity: { type: Number, required: true }
    }],
});

module.exports = mongoose.model('User', userSchema)