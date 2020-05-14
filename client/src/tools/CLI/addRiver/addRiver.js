#!/usr/bin/env node
var inquirer = require("inquirer");
var figlet = require("figlet");
const chalk = require("chalk");
var clear = require("clear");
//------Functions-----------
var createDirectory = require("./createDirectory.js");
var createDataFile = require("./createDataFile.js");
var appendRiverList = require("./appendRiverList.js");
var copyTemplateFiles = require("./copyTemplateFiles.js");

clear();
console.log(
  chalk.cyan(
    figlet.textSync("Wet Exit River Guides", {
      font: "Small",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);
console.log(
  chalk.bold(
    "Congrats on getting this far! Strap on your PFD and follow along with the GitHub ReadMe"
  )
);

console.log();

console.log(
  "If you get stuck in a hole, dont swim! Just look back on the GitHub ReadMe and ask questions via raising GitHub issues."
);

console.log();

inquirer
  .prompt([
    {
      type: "input",
      name: "riverName",
      message:
        "River Name (eg. Ottawa River, Gauley River, Nantahala River etc): ",
    },
    {
      type: "input",
      name: "locationName",
      message:
        "River Location? (format: City, Province/State, Country) (eg. Ottawa, Ontario, Canada): ",
    },
  ])
  .then((answers) => {
    console.log(chalk.bold.cyan("addRiver"), "routine starting...");
    createDirectory(answers); //Create File Directorys
    createDataFile(answers); //Copy river data file
    appendRiverList(answers); //Append RiverList.js
    copyTemplateFiles(answers); //Copy Template Files

    var delayInMilliseconds = 500; //1 second
    setTimeout(function () {
      console.log(chalk.bold.cyan("addRiver"), "routine complete.");
      console.log();
      console.log(
        chalk.bold.yellow(answers.riverName),
        "has been added to the database!",
        chalk.bold("Refer back to the ReadMe for further instructions.")
      );
    }, delayInMilliseconds);
  })
  .catch((error) => {
    if (error.isTtyError) {
      //Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
