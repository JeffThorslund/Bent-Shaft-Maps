var fs = require("fs");
var nameParser = require("../nameParser.js");

//Create File Directorys

module.exports = function ({ riverName }) {
  console.log("Directory structure build starting...");

  //Desctructure name parser.
  const { folderName } = nameParser;

  fs.mkdirSync(`./src/river-data/${folderName(riverName)}`);
  fs.mkdirSync(`./src/river-data/${folderName(riverName)}/basemaps`);

  console.log("Directory structure build complete.");
};
