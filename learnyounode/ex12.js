const http = require("http");
const PORT = process.argv[2];
const map = require("through2-map");
const server = http.createServer((req, res) => {
  req.pipe(map((data) => {
    return data.toString().toUpperCase();
  })).pipe(res);
});

server.listen(PORT);


/* Official Solution
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/