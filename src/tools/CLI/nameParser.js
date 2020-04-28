const camelCase = require("camelcase");
const decamelize = require("decamelize");
const titleize = require("titleize");

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
