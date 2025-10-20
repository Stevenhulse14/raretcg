const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Cards" });
});

module.exports = router;
