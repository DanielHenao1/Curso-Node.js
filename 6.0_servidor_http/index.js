const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.end("Mi primer hola mundo desde el backend");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
