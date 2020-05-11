var fs = require("fs");

//Read JSON object
let chunk = fs.readFileSync(
  "../river-data/ottawa-river/temp_data.json",
  "utf8"
);

//Parse
chunk = JSON.parse(chunk);

//Destructure chunk object
let { rapids } = chunk;
console.log("Script starting...");

//loop through rapids
for (let i = 0; i < rapids.length; i++) {
  //destructure rapids
  let {
    name,
    displayPosition,
    hydraulics,
    eddys,
    lines,
    symbols,
    arrows,
    mapLabel,
  } = rapids[i];
  console.log("Rapid ", name, "started...");
  //loop through hydraulics
  for (let j = 0; j < hydraulics.length; j++) {
    //destructure hydraulics
    let { name, y, x, height, width } = hydraulics[j];
    //loop through all hydraulics
    console.log("Hydraulic ", name, "started...");
    chunk.rapids[i].hydraulics[j].x = Number(x);
    chunk.rapids[i].hydraulics[j].y = Number(y);
    chunk.rapids[i].hydraulics[j].height = Number(height);
    chunk.rapids[i].hydraulics[j].width = Number(width);
    console.log("Hydraulic ", name, "completed.");
  }

  //loop through eddys
  for (let j = 0; j < eddys.length; j++) {
    //destructure eddys
    let { name, y, x } = eddys[j];
    //loop through all eddys
    console.log("Eddy ", name, "started...");
    chunk.rapids[i].eddys[j].x = Number(x);
    chunk.rapids[i].eddys[j].y = Number(y);
    console.log("Eddy ", name, "completed.");
  }
  console.log("Rapid ", name, "completed.");
}

chunk = JSON.stringify(chunk);

fs.writeFileSync("../river-data/ottawa-river/temp_data.json", chunk);

console.log("Script completed.");
