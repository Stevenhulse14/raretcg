const mongoose = require("mongoose")
const {Schema} =  mongoose

const cardSchema = new Schema({
    id: String,
    name: String,
    supertype: String,
    set_name: String,
    rarity: String,
    images: {
        small: String,
        large: String
    },
    price: Number
});

module.exports = mongoose.model('Card', cardSchema)