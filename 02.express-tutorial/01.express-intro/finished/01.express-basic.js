const express = require("express");

const app = express();

//app.get - is a method that is used to handle GET requests
//app.post - is a method that is used to handle POST requests
//app.put - is a method that is used to handle PUT requests
//app.delete - is a method that is used to handle DELETE requests
//app.patch - is a method that is used to handle PATCH requests
//app.all - is a method that is used to handle all requests

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});


// If user enters a url that doesn't exist, it will return a 404 error
app.all("*", (req, res) => {
    res.status(404).send("Page not found");
  });
app.listen(3400, () => {
  console.log("Server is running on port 3400");
});
