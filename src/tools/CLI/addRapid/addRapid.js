#!/usr/bin/env node
var inquirer = require("inquirer");
var createBasemap = require("./createBasemap.js");
var appendDataFile = require("./appendDataFile.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "rapidName",
      message: "Rapid Name(eg. Fang): ",
    },
  ])
  .then((answers) => {
    //creates a copy of map template with proper name and changes contents to match rapid name
    createBasemap(answers);
    appendDataFile(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
