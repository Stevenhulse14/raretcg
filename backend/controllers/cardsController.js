const mongoose = require("mongoose")
const Card = require('../models/card')

const getAllCards = async (req, res) => {
    const cards = await Card.find().sort('name')
    res.json({ message: cards })
}

const getCard = async (req, res) => {
    try{
        const card = await Card.findOne({ id: req.params.id })
        res.json({ message: card })
    }
    catch (err) {
        console.log(err)
    }
}

const addCard = async (req, res) => {
    try{
        data = req.body
        const newCard = new Card({
            id: data.id,
            name: data.name,
            supertype: data.type,
            set_name: data.setName,
            rarity: data.rarity,
            images: {
                small: data.imgSmall,
                large: data.imgLarge,
            },
            price: data.price,
        });
        const savedCard = await newCard.save()
        console.log("testing")
        res.json({ message: savedCard })
    }
    catch (err) {
        console.log(err)
    }
}

const updateCard = async (req, res) => {
    try{
        const data = req.body
        const card = await Card.updateOne({ _id: req.body._id }, {
            id: data.id,
            name: data.name,
            supertype: data.type,
            set_name: data.setName,
            rarity: data.rarity,
            images: {
                small: data.imgSmall,
                large: data.imgLarge,
            },
            price: data.price,
        })
        res.json({ message: card })
    }
    catch (err) {
        console.log(err)
    }
}

const deleteCard = async (req, res) => {
    try{
        const card = await Card.deleteOne({ id: req.params.id })
        res.json({ message: card })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { getAllCards, getCard, deleteCard, addCard, updateCard }