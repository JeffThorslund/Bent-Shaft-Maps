var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function (answers) {
  console.log("copyTemplateFiles Started.");

  //Copy Template River Files

  var files = ["TemplateOverviewMap", "TemplateRapid", "TemplateWelcome"];

  for (let file of files) {
    fs.copyFileSync(
      `./src/river-data/my-river-template/basemaps/${file}.js`,
      `./src/river-data/${nameParser.folderName(
        answers.riverName
      )}/basemaps/${file}.js`
    );
  }

  console.log("copyTemplateFiles Completed.");
};
