const express = require("express")
    , stylus = require("stylus")
    , app = express()
    , PORT = process.argv[2]
    , path = process.argv[3];

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname, "public")));
app.listen(PORT);