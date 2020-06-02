var fs = require("fs");

module.exports = function (path) {
  let files = fs.readdirSync(path);
  let rivers = [];

  files.forEach((elem) => {
    let dataPath = `${path}/${elem}/data.json`;

    try {
      fs.accessSync(dataPath);
      console.log("can read/write");
      let data = fs.readFileSync(dataPath, "utf8");
      rivers.push(JSON.parse(data));
    } catch (err) {
      console.error("no file present!");
    }
  });

  return JSON.stringify({ rivers: rivers });
};
