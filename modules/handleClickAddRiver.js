var fs = require("fs");
const generateId = require("./generateId");

module.exports = function (body) {
  const { riverName } = body;

  //Get template rapid from data.json in template dir
  let templateRiver = JSON.parse(
    fs.readFileSync("./client/src/river-data/template-river/data.json", "utf8")
  );

  templateRiver.id = generateId("river");
  for (let rapid of templateRiver.rapids) {
    rapid.id = generateId("rapid");
    for (let featureType in rapid) {
      if (Array.isArray(rapid[featureType])) {
        for (let feature of rapid[featureType]) {
          feature.id = generateId(featureType);
        }
      }
    }
  }

  return templateRiver;
};
