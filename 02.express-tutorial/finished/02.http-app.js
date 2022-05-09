const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./methods-public/index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("<h1>..............About page..............</h1>");
    res.end();
  }
  // 404 page not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>..............Page not found...........</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
