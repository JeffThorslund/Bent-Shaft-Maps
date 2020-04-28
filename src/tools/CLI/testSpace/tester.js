#!/usr/bin/env node

var contentCopy = require("./contentCopy");
var fs = require("fs");
var obj = require("./content.js");

console.log("this is working");
var hold = fs.readFileSync(
  "C:/Users/User/ottawa-river-whitewater/src/tools/CLI/testSpace/content.js",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

obj.prop1 = 1;
contentCopy.prop2 = "bloopy";
console.log(contentCopy);
console.log(obj);
