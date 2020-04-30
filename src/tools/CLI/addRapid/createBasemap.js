var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function ({ rapidName }) {
  console.log("createBasemap Started");

  //Desctructure nameParser
  const { rapid } = nameParser;

  //Copy template rapid while changing name
  var content = fs
    .readFileSync("../my-river-template/basemaps/TemplateRapid.js", "utf8")
    .replace(/TemplateRapid/g, `${rapid(rapidName)}`);

  //write new basemap file
  fs.writeFileSync(`./basemaps/${rapid(rapidName)}.js`, content);

  console.log("createBasemap Finished");
};
