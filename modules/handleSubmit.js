var fs = require("fs");

module.exports = function (river) {
  fs.writeFileSync(
    "./client/src/river-data/ottawa-river/data.json",
    JSON.stringify(river)
  );

  return "River Submitted!";
};
