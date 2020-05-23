var fs = require("fs");

module.exports = function (body) {
  fs.writeFileSync(
    "./client/src/river-data/ottawa-river/data.json",
    JSON.stringify(values[river])
  );

  return "that worked!";
};
