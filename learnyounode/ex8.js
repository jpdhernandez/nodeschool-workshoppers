const bl = require("bl");
const url = process.argv[2];
const http = require("http");

http.get(`${url}`, (res) => {
  res.setEncoding("utf8");
  res.pipe(bl((err, d) => {
    d = d.toString();
    console.log(`${d.length}\n${d}`);
  }));
}).on("error", (e) => {
  console.error(e);
});

/* Official solution:
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/