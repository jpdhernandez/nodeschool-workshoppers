const bl = require("bl");
const urls = [process.argv[2], process.argv[3], process.argv[4]];
const http = require("http");
const _ = require("underscore");

_.each(urls, (url) => {
  http.get(`${url}`, (res) => {
    res.setEncoding("utf8");
    res.pipe(bl((err, d) => {
      if (err) return console.error(err);
      console.log(`${d}`);
    }))
  });
});  

/* Official Solution to Juggling Async:
  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0

  function printResults () {
    for (var i = 0; i < 3; i++) {
      console.log(results[i])
    }
  }

  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
          printResults()
        }
      }))
    })
  }

  for (var i = 0; i < 3; i++) {
    httpGet(i)
  }
*/