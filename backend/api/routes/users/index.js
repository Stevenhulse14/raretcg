const user = require("../../database/usersData");
const express = require("express");

const router = express.Router();

// http://localhost:8000/api/users
// Only for testing
router.get("/", (req, res) => {
  res.json({ message: user });
});

// http://localhost:8000/api/users/signup
router.post("/signup", (req, res) => {
  console.log(user);
  user.push(req.body);
  res.json({ message: "Signed Up" });
});

// http://localhost:8000/api/users/login
router.post("/login", (req, res) => {
  const userName = req.body.userName;
  console.log("userName:", userName);
  const password = req.body.password;
  console.log("password:", password);
  res.json({ message: "Logging In" });
});

// http://localhost:8000/api/users/logout
router.post("/logout", (req, res) => {
  const userName = req.body.userName;
  console.log("userName:", userName);
  const password = req.body.password;
  console.log("password:", password);
  res.json({ message: "Logging Out" });
});

module.exports = router;
