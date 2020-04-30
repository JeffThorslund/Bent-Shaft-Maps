var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function ({ riverName }) {
  console.log("data.js build started...");

  //destructure nameParser
  const { userInput, folderName } = nameParser;

  //Copy TemplateRiverData
  var content = fs.readFileSync(
    "./src/river-data/my-river-template/data.js",
    "utf8"
  );

  //Fill import info based on user input
  var nameBlob = `${userInput(riverName)}`;

  //Replace data entry points with new data
  var result = content.replace(/\/\/nameEntryPoint/, `${nameBlob}`);

  //Replace old RiverList with new RiverList
  let wstream = fs.createWriteStream(
    `./src/river-data/${folderName(riverName)}/data.js`
  );
  wstream.write(result, function (err) {
    if (err) throw err;
  });
  console.log("data.js build completed.");
};
