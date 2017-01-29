const fileLister = require("./ex6b");
const dir = process.argv[2];
const fileExt = process.argv[3];
const _ = require("underscore");

fileLister(dir, fileExt, (err, list) => {
  _.each(list, (file) => {
    console.log(file);
  });
});