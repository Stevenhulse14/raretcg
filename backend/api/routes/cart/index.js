const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Cart" });
});

module.exports = router;
