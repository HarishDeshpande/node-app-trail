const http = require("http");

const server = http.createServer();

// server extends the EventEmitter so server.on can be used
server.on("request", (req, res) => {
  res.end("Welcome");
});
s;
server.listen(5000);
