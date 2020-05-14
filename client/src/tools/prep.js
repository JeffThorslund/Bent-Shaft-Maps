var fs = require("fs");

//Read JSON object
let chunk = fs.readFileSync(
  "../river-data/ottawa-river/data_copy.json",
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
    let { name, y, x, height, width, rotation } = hydraulics[j];
    //loop through all hydraulics
    console.log("Hydraulic ", name, "started...");
    chunk.rapids[i].hydraulics[j].x = Number(x);
    chunk.rapids[i].hydraulics[j].y = Number(y);
    chunk.rapids[i].hydraulics[j].height = Number(height);
    chunk.rapids[i].hydraulics[j].width = Number(width);
    chunk.rapids[i].hydraulics[j].rotation = Number(rotation);
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

  top = top.toString();
  left = left.toString();
  width = width.toString();

  chunk.rapids[i].displayPosition.top = Number(top.replace(/\D/g, ""));
  chunk.rapids[i].displayPosition.left = Number(left.replace(/\D/g, ""));
  chunk.rapids[i].displayPosition.width = Number(width.replace(/\D/g, ""));
  console.log("displayPosition completed.");

  //loop through arrows
  for (let j = 0; j < arrows.length; j++) {
    //destructure arrows
    let { name, bottom, right } = arrows[j];
    //loop through all arrows
    console.log("Arrow ", name, "started...");

    bottom = bottom.toString();
    right = right.toString();

    chunk.rapids[i].arrows[j].bottom = Number(bottom.replace(/\D/g, ""));
    chunk.rapids[i].arrows[j].right = Number(right.replace(/\D/g, ""));

    console.log("Arrow ", name, "completed.");
  }

  //destructure displayPosition
  let { titleTop, titleLeft, pointerCoordinates } = mapLabel;
  //loop through all displayPosition
  console.log("mapLabel started...");

  titleTop = titleTop.toString();
  titleLeft = titleLeft.toString();

  chunk.rapids[i].mapLabel.titleTop = Number(titleTop.replace(/\D/g, ""));
  chunk.rapids[i].mapLabel.titleLeft = Number(titleLeft.replace(/\D/g, ""));

  chunk.rapids[i].mapLabel.pointerCoordinates =
    typeof pointerCoordinates === "string"
      ? pointerCoordinates.split(",").map((x) => +x)
      : pointerCoordinates;

  console.log("mapLabel completed.");

  console.log("Rapid ", name, "completed.");
}

chunk = JSON.stringify(chunk);

fs.writeFileSync("../river-data/ottawa-river/finaldata.json", chunk);

console.log("Script completed.");
