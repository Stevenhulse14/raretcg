// we will be using express to create a server
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const api = require("./api");
const app = express();
const port = 8000;

// middleware
// cors middleware
app.use(cors());
// login middleware
app.use(morgan("dev"));
// body parser middleware
app.use(express.json());
app.use(cookieParser());
// urlencoded middleware
app.use(express.urlencoded({ extended: true }));
// static middleware
app.use(express.static("public"));
// error middleware


app.get("/", (req, res) => {
  res.send({ message: "Landing Page", status: "success" });
});

app.get("/health", (req, res) => {
  res.send({ message: "Health check", status: "success" });
});

app.use("/api", api);

mongoose.connect('mongodb+srv://cbarwicki14_db_user:CKSMgoy8Ranhz0pB@raretcg.munrslx.mongodb.net/raretcg')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
