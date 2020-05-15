var fs = require("fs");

module.exports = function (path) {

  let files = fs.readdirSync(path);

  let rivers = [];

  files.forEach((elem) => {
    let data = fs.readFileSync(`${path}/${elem}/temp_data.json`, "utf8");
    rivers.push(JSON.parse(data));
  });

  return JSON.stringify({ rivers: rivers });
};
