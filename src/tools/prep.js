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

  //loop through lines
  for (let j = 0; j < lines.length; j++) {
    //destructure lines
    let { name, y, x } = lines[j];
    //loop through all lines
    console.log("Line ", name, "started...");
    chunk.rapids[i].lines[j].x = Number(x);
    chunk.rapids[i].lines[j].y = Number(y);
    console.log("Line ", name, "completed.");
  }

  //loop through symbols
  for (let j = 0; j < symbols.length; j++) {
    //destructure symbols
    let { type, top, left } = symbols[j];
    //loop through all symbols
    console.log("Symbol ", type, "started...");
    chunk.rapids[i].symbols[j].top = Number(top);
    chunk.rapids[i].symbols[j].left = Number(left);
    console.log("Symbol ", type, "completed.");
  }

  //destructure displayPosition
  let { top, left, width } = displayPosition;
  //loop through all displayPosition
  console.log("displayPosition started...");

  top = top.replace(/\D/g, "");
  left = left.replace(/\D/g, "");
  width = width.replace(/\D/g, "");

  chunk.rapids[i].displayPosition.top = Number(top);
  chunk.rapids[i].displayPosition.left = Number(left);
  chunk.rapids[i].displayPosition.width = Number(width);
  console.log("displayPosition completed.");

  console.log("Rapid ", name, "completed.");
}

chunk = JSON.stringify(chunk);

fs.writeFileSync("../river-data/ottawa-river/temp_data.json", chunk);

console.log("Script completed.");
