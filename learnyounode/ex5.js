const fs = require("fs");
const dir = process.argv[2];
const _ = require("underscore");

fs.readdir(`${dir}`, (err, list) => {
  if (err) console.log(err);

  _.each(list, (item) => {
    if (item.split(".")[1] === `${process.argv[3]}` )
      console.log(`${item}`);
  });
});

// Alternative solution
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })