const User = require('../models/user')
const Card = require('../models/card')

const getCart = async (req, res) => {
    try{
        userId = req.params.userId

        const user = await User.findById(userId)

        const userCart = []

        for (let i = 0; i < user.cart.length; i++) {
            const card = await Card.findOne({ id: user.cart[i].cardId })
            const cartItem = {
                card: card,
                quantity: user.cart[i].quantity
            }
            userCart.push(cartItem)
        }

        res.json({ message: userCart });
    }
    catch (err) {
        console.log(err)
    }
}

const removeFromCart = async (req, res) => {
    try{
        const userId = req.params.userId
        const cardId = req.params.cardId

        const user = await User.findById(userId)

        for (let i = 0; i < user.cart.length; i++) {
            if (user.cart[i].cardId == cardId) {
                user.cart.splice(i, 1)
            }
        }

        const updatedUser = await user.save()

        res.json({ message: "card successfully deleted" })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { getCart, removeFromCart }