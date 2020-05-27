var fs = require("fs");
const generateId = require("./generateId");

module.exports = function (body) {
  const { rivers, riverIndex, rapidIndex, newFeatureType } = body;

  //Get template rapid from data.json in template dir
  let templateFeature = JSON.parse(
    fs.readFileSync("./client/src/river-data/template-river/data.json", "utf8")
  ).rapids[0][newFeatureType][0];

  //Set uniqe IDs for rapid, and all features.

  templateFeature.id = generateId(newFeatureType);

  //Push template rapid onto current river
  rivers[riverIndex].rapids[rapidIndex][newFeatureType].push(templateFeature);

  return rivers[riverIndex];
};
