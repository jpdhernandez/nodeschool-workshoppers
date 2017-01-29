const url = process.argv[2];
const http = require("http");

http.get(`${url}`, (res) => {
  res.setEncoding("utf8");
  res.on("data", (d) => {
    process.stdout.write(`${d}\n`);
  });
}).on("error", (e) => {
  console.error(e);
});

/* Official solution:
  const http = require('http')

  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  }).on('error', console.error)
  
 */