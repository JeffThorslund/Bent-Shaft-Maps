var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = ({ riverName, LocationName }) => {
  console.log("Append RiverList starting...");
  
  //Set location of RiverList.js.
  const riverListUrl = "./src/river-data/RiverList.js";

  //Destructure NameParser functions.
  const { folderName, data, global } = nameParser;

  //Copy RiverList
  var content = fs.readFileSync(riverListUrl, "utf8");

  //Fill import info based on user input
  var importBlob = `import {
  data as ${data(riverName)},
  global as ${global(riverName)},
} from "../river-data/${folderName(riverName)}/data.js";`;

  //Fill RiverList element based on user input
  var entryBlob = `{
  name: "${riverName}",
  location: "${LocationName}",
  class: "II",
  underConst: false,
  data: ${data(riverName)},
  global: ${global(riverName)},
}`;

  //Replace data entry points with new data
  var result = content.replace(
    /\/\/elementEntryPoint/,
    `${entryBlob}, //elementEntryPoint`
  );

  result = result.replace(
    /\/\/importEntryPoint/,
    `${importBlob} //importEntryPoint`
  );

  //Replace old RiverList with new RiverList
  let wstream = fs.createWriteStream(riverListUrl);
  wstream.write(`${result}`, function (err) {
    if (err) throw err;
    console.log("Append RiverList completed.");
  });
};
