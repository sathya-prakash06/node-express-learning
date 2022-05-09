const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("../navbar-app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3400, () => {
  console.log("Server is running on port 3400");
});
