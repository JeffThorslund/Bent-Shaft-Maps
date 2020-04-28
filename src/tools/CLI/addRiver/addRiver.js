#!/usr/bin/env node
var inquirer = require("inquirer");
var figlet = require("figlet");
var clear = require("clear");
//------Functions-----------
var createDirectory = require("./createDirectory.js");
var createDataFile = require("./createDataFile.js");
var appendRiverList = require("./appendRiverList.js");
var copyTemplateFiles = require("./copyTemplateFiles.js");

clear();
console.log(
  figlet.textSync("WetExit Guides", {
    font: "Modular",
    horizontalLayout: "default",
    verticalLayout: "default",
  })
);

inquirer
  .prompt([
    {
      type: "input",
      name: "riverName",
      message: "River Name(eg. Ottawa River): ",
    },
    {
      type: "input",
      name: "locationName",
      message: "Location name? (eg. Ottawa, Ontario, Canada)",
    },
  ])
  .then((answers) => {
    console.log("addRiver Started.");
    createDirectory(answers); //Create File Directorys
    createDataFile(answers); //Copy river data file
    appendRiverList(answers); //Append RiverList.js
    copyTemplateFiles(answers); //Copy Template Files
    console.log("addRiver Complete.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
