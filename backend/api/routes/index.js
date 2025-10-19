const express = require("express");
const usersRouter = require("./users");
const adminRouter = require("./admin");
const loginRouter = require("./login");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/admin", adminRouter);
router.use("/login", loginRouter);

module.exports = router;
