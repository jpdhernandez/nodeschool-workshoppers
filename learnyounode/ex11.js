const http = require("http");
const fs = require("fs");
const PORT = process.argv[2];
const fileLocation = process.argv[3];
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(fileLocation);
  stream.pipe(res);
});

server.listen(PORT);

/* Official Solution:
  var http = require('http')
  var fs = require('fs')
  var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(process.argv[3]).pipe(res)
  })

  server.listen(Number(process.argv[2]))
*/