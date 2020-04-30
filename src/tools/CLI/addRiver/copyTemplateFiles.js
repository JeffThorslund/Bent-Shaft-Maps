var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function ({ riverName }) {
  console.log("template replication started...");
  //Destructure NameParser functions.
  const { folderName } = nameParser;

  //Copy Template River Files
  var files = ["DefaultRapid", "OverviewMap", "TemplateRapid", "Welcome"];
  for (let file of files) {
    fs.copyFileSync(
      `./src/river-data/my-river-template/basemaps/${file}.js`,
      `./src/river-data/${folderName(riverName)}/basemaps/${file}.js`
    );
  }

  console.log("template replication complete.");
};
