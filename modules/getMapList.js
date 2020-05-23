var fs = require("fs");

module.exports = function (path) {
  let list = fs.readdirSync(path);
  return JSON.stringify({ list: list });
};
