const usePathParser = (pathCommands) => {
  /**
   * Outputs svg path string and list of node coordinates.
   */

  //This is a dictionary of how to react to different nodes.
  const coordIndex = {
    M: 0,
    S: 2,
  };

  //Define variables
  let midpointNodeList = [];
  let nodeList = [];
  let path = "";

  //Loop through nodes
  for (let pathCommand of pathCommands) {
    path = path.concat(pathCommand.type);

    const coordStartIndex = coordIndex[pathCommand.type];

    nodeList.push({
      x: pathCommand.args[coordStartIndex],
      y: pathCommand.args[coordStartIndex + 1],
    });

    midpointNodeList.push({
      x: pathCommand.args[0],
      y: pathCommand.args[1],
    });

    for (const [i, argument] of pathCommand.args.entries()) {
      if (i > 0 && i % 2 === 0) {
        path = path + ",";
      }
      path = path + " " + argument;
    }
  }

  console.log(midpointNodeList);

  return [nodeList, midpointNodeList, path];
};

export default usePathParser;
