const express = require("express");
const cartController = require('../../../controllers/cartController')

const router = express.Router();

// http://localhost:8000/api/cart/:userId
router.get("/:userId", cartController.getCart);

// http://localhost:8000/api/cart/:userId/:cardId
router.delete("/:userId/:cardId", cartController.removeFromCart);

module.exports = router;
