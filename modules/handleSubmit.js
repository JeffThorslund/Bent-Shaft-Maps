var fs = require("fs");

module.exports = function (riverName, river) {
  fs.writeFileSync(
    `./client/src/river-data/${
      riverName
    }/data.json`,
    JSON.stringify(river)
  );

  return "River Submitted!";
};
