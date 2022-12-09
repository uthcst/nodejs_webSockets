const http = require('http');
const fs = require('fs');
const port = 4000;

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4001 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');
  const interval = setInterval(() => {
    ws.send((new Date).toLocaleTimeString());
  }, 1000)
  ws.on("close", () => {
    console.log("Client disconnected");
  });
  ws.onerror = function () {
    console.log("Some Error occurred");
  }
});

http.createServer(function (req, res) {
  fs.readFile("./www/index.html", function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(port);
console.log("Running at port " + port);


