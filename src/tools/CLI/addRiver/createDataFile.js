var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function (answers) {
  console.log("createDataFile Started.");

  //Copy TemplateRiverData
  var data = fs.readFileSync(
    "./src/river-data/my-river-template/data.js",
    "utf8"
  );

  //Fill import info based on user input
  var nameBlob = `${nameParser.userInput(answers.riverName)}`;

  //Replace data entry points with new data
  var result = data.replace(/\/\/nameEntryPoint/, `${nameBlob}`);

  //Replace old RiverList with new RiverList
  let wstream = fs.createWriteStream(
    `./src/river-data/${nameParser.folderName(answers.riverName)}/data.js`
  );
  wstream.write(`${result}`, function (err) {
    if (err) throw err;
    console.log("createDataFile Completed");
  });
};

//Copy Template River Data
/*fs.copyFileSync(
    "./src/river-data/my-river-template/TemplateRiverData.js",
    `./src/river-data/${nameParser.folderName(
      answers.riverName
    )}/${nameParser.dataFile(answers.riverName)}.js`
  );*/
