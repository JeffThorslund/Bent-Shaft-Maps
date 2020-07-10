#!/usr/bin/env node
var inquirer = require("inquirer");
var createBasemap = require("./createBasemap.js");
var appendDataFile = require("./appendDataFile.js");
var chalk = require("chalk");

console.log(chalk.bold("Lets add a rapid to our river!"));

inquirer
  .prompt([
    {
      type: "input",
      name: "rapidName",
      message: "Rapid Name(eg. Hermit Rapid, Lava Falls, Bedrock Rapid): ",
    },
  ])
  .then((answers) => {
    console.log();
    console.log(chalk.bold.cyan("addRiver"), "routine starting...");
    //creates a copy of map template with proper name and changes contents to match rapid name
    createBasemap(answers);
    //adds reference to basemap and a new rapid instance in data file.
    appendDataFile(answers);

    var delayInMilliseconds = 500; //1 second
    setTimeout(function () {
      console.log(chalk.bold.cyan("addRapid"), "routine complete.");
      console.log();
      console.log(
        chalk.bold.yellow(answers.rapidName),
        "has been added to the river!",
        chalk.bold("Refer back to the ReadMe for further instructions.")
      );
    }, delayInMilliseconds);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
