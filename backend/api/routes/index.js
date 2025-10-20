const express = require("express");
const usersRouter = require("./users");
const authRouter = require("./auth");
const cardsRouter = require("./cards");
const cartRouter = require("./cart");
const ordersRouter = require("./orders");
const reviewsRouter = require("./reviews");
const stripeRouter = require("./stripe");
const discountsRouter = require("./discounts");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/cards", cardsRouter);
router.use("/cart", cartRouter);
router.use("/orders", ordersRouter);
router.use("/reviews", reviewsRouter);
router.use("/stripe", stripeRouter);
router.use("/discounts", discountsRouter);

module.exports = router;
