import React from "react";
import Node from "./Node";
import usePathParser from "./_utils/usePathParser";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({ name, desc, isTestEnv, pathCommands, x, y, showNodes = true }) => {
  const [nodes, midpointNodeList, path] = usePathParser(pathCommands);

  return (
    <g>
      {showNodes &&
        nodes.map((node, i) => (
          <Node
            color="red"
            node={node}
            key={"n" + i}
            index={i}
            isEndpointNode={true}
            isTestEnv={isTestEnv}
          />
        ))}

      {showNodes &&
        midpointNodeList.map((node, i) => (
          <Node
            color="black"
            node={node}
            key={"mn" + i}
            index={i}
            isEndpointNode={false}
            isTestEnv={isTestEnv}
          />
        ))}

      <path d={path} stroke="black" />
    </g>
  );
};

export default Line;
