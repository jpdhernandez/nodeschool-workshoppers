const http = require("http");
const PORT = process.argv[2];
const url = require("url");
const timestamp = require("unix-timestamp");
const strftime = require('strftime');
const server = http.createServer((req, res) => {
  const time = new Date(url.parse(req.url, true).query.iso);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const parsedHMS = strftime("%T" , time).split(":");
  const hms = {hour: +parsedHMS[0], minute: +parsedHMS[1], second: +parsedHMS[2]};
  const unix = { unixtime: time.getTime() };

  if (/\/api\/unixtime/.test(req.url)) {
    res.end(JSON.stringify(unix));
  } else {
    res.end(JSON.stringify(hms));
  }
});

server.listen(PORT);

