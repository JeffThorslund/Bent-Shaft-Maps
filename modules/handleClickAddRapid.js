var fs = require("fs");
const generateId = require("./generateId");

module.exports = function (rivers, riverIndex) {
  //Get template rapid from data.json in template dir
  let templateRapid = JSON.parse(
    fs.readFileSync("./client/src/river-data/template-river/data.json", "utf8")
  ).rapids[0];

  //Set uniqe IDs for rapid, and all features.
  templateRapid.id = generateId("rapid");
  for (let featureType in templateRapid) {
    if (Array.isArray(templateRapid[featureType]) && featureType != "arrows") {
      for (let feature of templateRapid[featureType]) {
        feature.id = generateId(featureType);
      }
    }
  }

  //Push template rapid onto current river

  rivers[riverIndex].rapids.push(templateRapid);

  return rivers[riverIndex];
};
