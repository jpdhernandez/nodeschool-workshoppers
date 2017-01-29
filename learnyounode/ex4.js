const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, buffer) => {
  if (err) { return console.log(err); }
  console.log(buffer.toString().split("\n").length - 1);
});