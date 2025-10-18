// we will be using express to create a server
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3800;

// middleware
// loggin middleware
app.use(morgan("dev"));
// body parser middleware
app.use(express.json());
// urlencoded middleware
app.use(express.urlencoded({ extended: true }));
// static middleware
app.use(express.static("public"));
// error middleware

app.get("/health", (req, res) => {
  res.send({ message: "Health check", status: "success" });
});

app.get("/user", (req, res) => {
  res.send({ message: "Hello Users", status: "success" });
});

app.get("/admin", (req, res) => {
  res.send({ message: "Hello Admin", status: "success" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
