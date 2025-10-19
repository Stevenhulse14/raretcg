// we will be using express to create a server
const express = require("express");
const morgan = require("morgan");
const api = require("./api");
const app = express();
const port = 3800;

// middleware
// login middleware
app.use(morgan("dev"));
// body parser middleware
app.use(express.json());
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
