var fs = require("fs");
const generateId = require("./generateId");

module.exports = function (body) {
  const { riverArr, riverIndex, rapidIndex, featureIndex, type } = body;

  //Get template rapid from data.json in template dir
  let templateRapid = JSON.parse(
    fs.readFileSync(
      "./client/src/river-data/my-river-template/data.json",
      "utf8"
    )
  ).rapids[0];

  //Set uniqe IDs for rapid, and all features.
  templateRapid.id = generateId("rapid");
  for (let featureType in templateRapid) {
    if (Array.isArray(templateRapid[featureType])) {
      for (let feature of templateRapid[featureType]) {
        feature.id = generateId(featureType);
      }
    }
  }

  //Get current rapid data
  let river = JSON.parse(
    fs.readFileSync(`./client/src/river-data/ottawa-river/data.json`, "utf8")
  ); //DONT NEED THIS WE ALREADY HAVE RIVER ARRAY



  //Push template rapid onto current river

  if (featureIndex != null) {
    river.rapids[riverIndex][featureName].push(
      templateRapid.rapids[0][featureName]
    );
  } else {
    river.rapids.push(templateRapid);
  }

  return river;
};
