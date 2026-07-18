const data = require("../../database/pokemonCardData");
const express = require("express");
const cardsController = require('../../../controllers/cardsController.js')

const router = express.Router();

router.get("/", cardsController.getAllCards);

router.get("/:id", cardsController.getCard);

router.post("/", cardsController.addCard);

router.put("/:id", cardsController.updateCard);

router.delete("/:id", cardsController.deleteCard);

module.exports = router;
