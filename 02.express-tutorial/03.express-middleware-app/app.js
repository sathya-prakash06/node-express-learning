const express = require("express");
const morgan = require("morgan");
const app = express();

// data
const data = require("./data");

// middleware function
const logger = require("./logger.js");
const authorize = require("./authorize.js");

// MIDDLEWARE
// req => middleware => res
app.use(morgan("tiny"));
//app.use(logger, authorize); // applicable for every request

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
