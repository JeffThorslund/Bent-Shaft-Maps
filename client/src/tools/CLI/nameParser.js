const camelCase = require("camelcase");
const decamelize = require("decamelize");
const titleize = require("titleize");
const upperCamelCase = require("uppercamelcase");

const userInput = (name) => {
  return titleize(name);
};

const dataFile = (name) => {
  return camelCase(name);
};

const folderName = (name) => {
  return decamelize(camelCase(name), "-");
};

const data = (name) => {
  return camelCase(name) + "Data";
};

const global = (name) => {
  return camelCase(name) + "Global";
};

const rapid = (name) => {
  return upperCamelCase(name) + "Rapid";
};

/*console.log(userInput("Ottawa River"));
console.log(dataFile("Ottawa River"));
console.log(folderName("Ottawa River"));
console.log(data("Ottawa River"));
console.log(global("Ottawa River"));*/

exports.userInput = userInput;
exports.dataFile = dataFile;
exports.folderName = folderName;
exports.data = data;
exports.global = global;
exports.rapid = rapid;
