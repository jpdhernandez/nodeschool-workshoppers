const express = require("express")
    , fs = require("fs")
    , app = express()
    , PORT = process.argv[2]
    , FILE = process.argv[3];

app.get("/books", (req, res) => {
  fs.readFile(`${FILE}`, "utf8", (err, buffer) => {
    if (err) return console.error(err);
    
    res.json(JSON.parse(buffer)).end();
  });
});
app.listen(PORT);