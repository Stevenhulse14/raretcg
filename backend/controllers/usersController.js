const mongoose = require("mongoose")
const User = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "super-secret-key-change-this"; // use env var in real app

const getUser = async (req, res) => {
    try{
        console.log("testing get user")
        res.json({ message: "testing" })
    }
    catch (err) {
        console.log(err)
    }
}

// sign Up
const addUser = async (req, res) => {
    try{
        data = req.body

        // check if user exists, return error if not
        const userExists = await User.findOne({ email: data.email })
        if (userExists){
            return res.status(409).json({ message: "User with this email already exists." });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(data.password, 10)

        const newUser = new User({
            email: data.email,
            password: hashedPassword,
            cart: []
        });
        const savedUser = await newUser.save()
        console.log("testing saving user")
        res.json({ message: savedUser })
    }
    catch (err) {
        console.log(err)
        res.json({ message: err })
    }
}

// login
const logIn = async (req, res) => {
    try{
        const data = req.body

        // find user
        const user = await User.findOne({ email: data.email });
        if (!user) {
        // don't reveal whether email or password is wrong
        return res.status(400).json({ message: "Invalid credentials" });
        }

        // check password
        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
        }

        // generate jwt
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "1h" }
        )

        console.log(token)

        res.json({ token: token })
    }
    catch(err) {
        console.log(err)
        res.json({ message: err })
    }

}

// add to cart
const addToCart = async (req, res) => {
    try{
        const { cardId, quantity, userId } = req.body;

        const user = await User.findById(userId)

        // check if user's cart already contains target card
        const existingItem = user.cart.find(item => item.cardId === cardId)

        if (existingItem) {
            existingItem.quantity += quantity
        }
        else {
            user.cart.push({ cardId, quantity })
        }

        const updatedUser = await user.save()

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "add to cart" })
    }
    catch(err) {
        console.log(err)
        res.json({ message: err })
    }
}


module.exports = { addUser, getUser, logIn, addToCart }