var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function (answers) {
  console.log("appendDataFile Started.");

  //Copy RiverList
  var content = fs.readFileSync(
    `${nameParser.data(answers.rapidName)}.js`,
    "utf8"
  );

  console.log(content);
  /*
  //Fill import info based on user input
  var importBlob = `import {
  data as ${nameParser.data(answers.riverName)},
  global as ${nameParser.global(answers.riverName)},
} from "../river-data/${nameParser.folderName(
    answers.riverName
  )}/${nameParser.dataFile(answers.riverName)}";`;

  //Fill RiverList element based on user input
  var entryBlob = `{
  name: "${answers.riverName}",
  location: "${answers.locationName}",
  class: "II",
  underConst: false,
  data: ${nameParser.data(answers.riverName)},
  global: ${nameParser.global(answers.riverName)},
}`;

  //Replace data entry points with new data
  var result = data.replace(
    /\/\/elementEntryPoint/,
    `${entryBlob}, //elementEntryPoint`
  );

  result = result.replace(
    /\/\/importEntryPoint/,
    `${importBlob} //importEntryPoint`
  );

  //Replace old RiverList with new RiverList
  let wstream = fs.createWriteStream(`./src/river-data/RiverList.js`);
  wstream.write(`${result}`, function (err) {
    if (err) throw err;
    console.log("appendRiverList Complete.");
  });*/
};
