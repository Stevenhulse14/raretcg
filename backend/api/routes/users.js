const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

router.post("/create", (req, res) => {
  res.json({ message: "Create User" });
});

module.exports = router;
