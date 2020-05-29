var fs = require("fs");
const generateId = require("./generateId");
var ncp = require("ncp").ncp;
const handleSubmit = require("./handleSubmit");

module.exports = function (body) {
  const { riverName } = body;

  //Copy files
  var source = "./client/src/river-data/template-river";
  var destination = `./client/src/river-data/${riverName}`;
  var options = {
    clobber: false,
  };

  ncp.limit = 16;
  ncp(source, destination, options, function (err) {
    if (err) {
      return console.error(err);
    }

    //Get newly created river
    let river = JSON.parse(
      fs.readFileSync(`./client/src/river-data/${riverName}/data.json`, "utf8")
    );

    //Add correct name
    console.log("name chnaged");
    river.name = riverName;

    //Distribute unique ID's
    river.id = generateId("river");
    for (let rapid of river.rapids) {
      rapid.id = generateId("rapid");
      for (let featureType in rapid) {
        if (Array.isArray(rapid[featureType])) {
          for (let feature of rapid[featureType]) {
            feature.id = generateId(featureType);
          }
        }
      }
    }

    handleSubmit(riverName, river);

    return "done ncp";
  });

  return "done handleClickAddRiver";
};
