const express = require("express")
  , app = express()
  , crpyto = require('crypto')
  , PORT = process.argv[2];

app.put("/message/:id", (req, res) => {
  const messageId = req.params.id;
  const SHA1 = crpyto
    .createHash('sha1')
    .update(new Date().toDateString() + messageId)
    .digest('hex')
  res.end(SHA1);
});

app.listen(PORT);