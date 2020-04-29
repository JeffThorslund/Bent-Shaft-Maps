var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function (answers) {
  console.log("createBasemap Started");

  var data = fs
    .readFileSync("../my-river-template/basemaps/TemplateRapid.js", "utf8")
    .replace(/TemplateRapid/g, `${nameParser.rapid(answers.rapidName)}`);

  fs.writeFileSync(
    `./basemaps/${nameParser.rapid(answers.rapidName)}.js`,
    data
  );

  console.log("createBasemap Finished");
};
