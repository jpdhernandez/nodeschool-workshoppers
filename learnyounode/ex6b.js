const _ = require("underscore");
const path = require('path');
const fs = require("fs");

module.exports = function (dir, fileExt, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);

    list = _.filter(list, (file) => {
      return path.extname(file) === `.${fileExt}`;
    });

    callback(null, list);
  });
};