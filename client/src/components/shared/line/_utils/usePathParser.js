const usePathParser = (pathCommands) => {
  //This is a dictionary of how to react to different nodes.
  const coordIndex = {
    M: 0,
    L: 0,
    C: 4,
    S: 2,
  };

  //Define variables
  let nodeList = [];
  let path = "";

  //Loop through nodes
  for (let pathCommand of pathCommands) {
    path = path.concat(pathCommand.type);

    const coordStartIndex = coordIndex[pathCommand.type];

    console.log(coordStartIndex, pathCommand.args, {
      x: pathCommand.args[coordStartIndex],
      y: pathCommand.args[coordStartIndex + 1],
    });

    nodeList.push({
      x: pathCommand.args[coordStartIndex],
      y: pathCommand.args[coordStartIndex + 1],
    });

    for (const [i, argument] of pathCommand.args.entries()) {
      if (i > 0 && i % 2 === 0) {
        path = path + ",";
      }
      path = path + " " + argument;
    }
  }

  //console.log(nodeList, path);

  return [nodeList, path];
};

export default usePathParser;
