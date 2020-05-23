var fs = require("fs");
const generateId = require("./generateId");

module.exports = function (riverName) {

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
    fs.readFileSync(`./client/src/river-data/${riverName}/data.json`, "utf8")
  );

  //Push template rapid onto current river
  river.rapids.push(templateRapid);

  return river;
};
