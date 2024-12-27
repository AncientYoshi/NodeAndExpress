const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to about page!");
    return;
  }
  res.end(`<h1>Oops</h1><p>You have some issues</p><a href='/'>Back Home</a>`);
  return;
});
server.listen(5000);
