var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function (answers) {
  console.log("createDataFile Started.");

  //Copy Template River Data
  fs.copyFileSync(
    "./src/river-data/my-river-template/TemplateRiverData.js",
    `./src/river-data/${nameParser.folderName(
      answers.riverName
    )}/${nameParser.dataFile(answers.riverName)}.js`
  );

  console.log("createDataFile Completed.");
};
