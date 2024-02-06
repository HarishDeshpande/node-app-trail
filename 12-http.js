const http = require("http");

// req - incoming request
// res - respond sending
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("This is our short history");
  } else {
    res.end(`
  <h1>Opps!!! Page doesnot exist</h1>
  <a href="/">Back To Home Page</a>
  `);
  }
});

server.listen(5000);
