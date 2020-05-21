var fs = require("fs");

module.exports = function (values) {
  fs.writeFileSync(
    "./client/src/river-data/ottawa-river/temp_data.json",
    JSON.stringify(values[0])
  ); 

  return "that worked!";
};
