const app = require("express")();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));
app.post("/form", (req, res) => {
  res.end(req.body.str.split("").reverse().join(""));
});
app.listen(process.argv[2]);