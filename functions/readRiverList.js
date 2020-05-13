"use strict";

var fs = require("fs");

exports.handler = function (event, context, callback) {
  const { path } = JSON.parse(event.body);

  let rivers = fs.readdirSync(path);

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content_Type, Accept",
    },
    body: JSON.stringify(rivers),
  });
};
