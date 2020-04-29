var fs = require("fs");
var nameParser = require("../nameParser.js");

module.exports = function (answers) {
  console.log("appendDataFile Started.");

  //Copy RiverList
  var content = fs.readFileSync(`data.js`, "utf8");

  var rapidImport = `import ${nameParser.rapid(
    answers.rapidName
  )} from "./basemaps/${nameParser.rapid(answers.rapidName)}.js";`;

  var rapid = `{
    name: "${answers.rapidName}",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: ${nameParser.rapid(answers.rapidName)},
    },
    hydraulics: [
      {
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, // Phils Hole
    ],
    eddys: [
      {
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "${nameParser.userInput(answers.rapidName)}"`;

  var result = content.replace(
    /\/\/importEntryPoint/,
    `${rapidImport} //importEntryPoint`
  );

  result = result.replace(/\/\/rapidEntryPoint/, `${rapid} //rapidEntryPoint`);

  let wstream = fs.createWriteStream(`data.js`);
  wstream.write(`${result}`, function (err) {
    if (err) throw err;
    console.log("appendDataFil Complete.");
  });

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