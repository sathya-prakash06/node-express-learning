const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
  } else if (req.url === "/users") {
    res.write("Users");
  }
  res.end(
    `
    <h1>Oops........... </h1>
    <p>we can't find this page</p> `
  );
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
