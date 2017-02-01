const express = require("express")
    , app = express()
    , PORT = process.argv[2];

app.get("/search", (req, res) => {
  res.end(JSON.stringify(req.query));
});
app.listen(PORT);