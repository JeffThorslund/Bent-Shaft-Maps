var fs = require("fs");
var changeCase = require('change-case')

module.exports = function (riverName, river) {

  //var riverName = changeCase.paramCase(rivers[riverIndex].name)

  fs.writeFileSync(
    `./client/src/river-data/${
      changeCase.paramCase(riverName)
    }/data.json`,
    JSON.stringify(river) 
  );

  return "River Submitted!";
};
