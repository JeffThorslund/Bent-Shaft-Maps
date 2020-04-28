#!/usr/bin/env node
var inquirer = require("inquirer");
//------Functions-----------
var createDirectory = require("./createDirectory.js");
var createDataFile = require("./createDataFile.js");
var appendRiverList = require("./appendRiverList.js");

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
      name: "River Location:",
      message: "Location name? (eg. Ottawa, Ontario, Canada)",
    },
  ])
  .then((answers) => {
    console.log("addRiver Started.");
    //Create File Directorys
    createDirectory(answers);
    //Copy river data file
    createDataFile(answers);
    //Append RiverList.js
    appendRiverList(answers);
    console.log("addRiver Complete.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
