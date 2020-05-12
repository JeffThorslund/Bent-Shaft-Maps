var fs = require("fs");

exports.handler = function (event, context, callback) {
  const { path } = JSON.parse(event.body);
  let files = fs.readdirSync(path);

  files.forEach((elem) => {
    let data = fs.readFileSync(`${path}/${elem}/temp_data.json`, "utf8");
    console.log(data);
  });
};
