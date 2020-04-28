var fs = require("fs");
var nameParser = require("../nameParser.js");

//Create File Directorys

module.exports = function (answers) {
  console.log("createDirectory Started.");

  fs.mkdirSync(`./src/river-data/${nameParser.folderName(answers.riverName)}`);

  fs.mkdirSync(
    `./src/river-data/${nameParser.folderName(answers.riverName)}/basemaps`
  );
  fs.mkdirSync(
    `./src/river-data/${nameParser.folderName(answers.riverName)}/vector-raw`
  );
  console.log("createDirectory Completed.");
};
