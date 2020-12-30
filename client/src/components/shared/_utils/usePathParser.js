const usePathParser = (lines) => {
  /**
   * Outputs svg path string and list of node coordinates.
   */

  //Define variables
  let bezier1Nodes = [];
  let bezier2Nodes = [];
  let nodeList = [];
  let path = "";

  //Loop through nodes
  for (let [i, line] of lines.entries()) {
    nodeList.push({
      x: line.fx,
      y: line.fy,
      pointType: "f", 
      i
    });

    if (line.type === "C") {
      bezier1Nodes.push({
        x: line.b1x,
        y: line.b1y,
        pointType: "b1",
        i
      });

      bezier2Nodes.push({
        x: line.b2x,
        y: line.b2y,
        pointType: "b2",
        i
      });
    }

    path = path.concat(line.type);

    // for (const [i, argument] of line.args.entries()) {
    //   if (i > 0 && i % 2 === 0) {
    //     path = path + ",";
    //   }
    //   path = path + " " + argument;
    // }
  }

  return [nodeList, bezier1Nodes, bezier2Nodes, "M 10,50"];
};

export default usePathParser;
