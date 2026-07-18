const express = require("express");
const usersController = require('../../../controllers/usersController.js')
const auth = require("../../../middleware/auth");

const router = express.Router();

// http://localhost:8000/api/users/me
// router.get("/me", auth, async (req, res) => {
//   res.json({ user: { email: req.user.email } });
// });

// http://localhost:8000/api/users/signup
router.post("/signup", usersController.addUser);

// http://localhost:8000/api/users/login
router.post("/login", usersController.logIn);

// http://localhost:8000/api/users/add-to-cart
router.post("/add-to-cart", usersController.addToCart)

// http://localhost:8000/api/users/logout
// router.post("/logout", (req, res) => {
//   const userName = req.body.userName;
//   console.log("userName:", userName);
//   const password = req.body.password;
//   console.log("password:", password);
//   res.json({ message: "Logging Out" });
// });

module.exports = router;
