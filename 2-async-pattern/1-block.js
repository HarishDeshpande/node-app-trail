const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    // block code
    // if this block of code contains some havy code, it'll block the on page operation
    // it is known as blocking code
    res.end("about page");
  } else {
    res.end("error page");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port:5000");
});
