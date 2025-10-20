const data = require("../../database/pokemonCardData");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: data });
});

router.get("/:id", (req, res) => {
  const cardId = req.params.id;
  res.json({ message: `${cardId}` });
});

router.post("/", (req, res) => {
  data.push(req.body)
  res.json({ message: `${cardId}` });
});

router.put("/:id", (req, res) => {
  const cardId = req.params.id;
  for (let i=0; i < data.length; i++) {
    if (data[i].id == cardId) {
      req.body.id = i+1
      data[i] = req.body
    }
  }
  res.json({ message: `${cardId}` });
});

router.delete("/:id", (req, res) => {
  const cardId = req.params.id;
  for (let i=0; i < data.length; i++) {
    if (data[i].id == cardId) {
      data.splice(i,1)
    }
  }
  res.json({ message: `${cardId}` });
});

module.exports = router;
