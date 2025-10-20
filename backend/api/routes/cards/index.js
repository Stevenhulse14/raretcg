import database from "../../database/pokemonCardData";
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: database });
});

router.get("/:id", (req, res) => {
  const cardId = req.params.id;
  res.json({ message: `${cardId}` });
});

router.post("/:id", (req, res) => {
  const cardId = req.params.id;
  res.json({ message: `${cardId}` });
});

router.put("/:id", (req, res) => {
  const cardId = req.params.id;
  res.json({ message: `${cardId}` });
});

router.delete("/:id", (req, res) => {
  const cardId = req.params.id;
  res.json({ message: `${cardId}` });
});

module.exports = router;
