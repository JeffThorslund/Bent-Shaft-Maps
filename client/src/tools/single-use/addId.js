const fs = require("fs");

const generateId = (prefix) => {
  var dic = new Set("abcdefghijklmnopqrstuvwxyz1234567890");
  id = `${prefix}_`;
  for (let i = 0; i < 5; i++) {
    index = Math.floor(Math.random() * dic.size);
    value = [...dic][index];
    id = `${id}${value}`;
  }
  return id;
};

const addId = () => {
  let data = JSON.parse(
    fs.readFileSync("../../river-data/ottawa-river/temp_data.json", "utf8")
  );

  for (let rapid of data.rapids) {
    rapid.id = generateId("rapid");

    for (let hydraulic of rapid.hydraulics) {
      hydraulic.id = generateId("hydraulic");
    }

    for (let eddy of rapid.eddys) {
      eddy.id = generateId("eddy");
    }

    for (let line of rapid.lines) {
      line.id = generateId("line");
    }

    for (let symbol of rapid.symbols) {
      symbol.id = generateId("symbol");
    }

    for (let arrow of rapid.arrows) {
      arrow.id = generateId("arrow");
    }
  }

  for (let rapid of data.rapids) {
    for (let arrow of rapid.arrows) {
      for (sub_rapid of data.rapids) {
        if (arrow.name == sub_rapid.name) {
          arrow.linkId = sub_rapid.id;
        }
      }
      delete arrow.name
    }
  }

  data = JSON.stringify(data);

  fs.writeFileSync("../../river-data/ottawa-river/data.json", data);
};

addId();
