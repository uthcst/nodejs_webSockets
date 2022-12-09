const http = require('http');
const hostname = 'localhost';
const port = 4000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello for Node JS');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

