#!/usr/bin/env node
var inquirer = require("inquirer");
//------Functions-----------
var createDirectory = require("./createDirectory.js");
var createDataFile = require("./createDataFile.js");
var appendRiverList = require("./appendRiverList.js");
var copyTemplateFiles = require("./copyTemplateFiles.js");

console.log("Thanks for taking the first step. Lets initialize your river!");

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
